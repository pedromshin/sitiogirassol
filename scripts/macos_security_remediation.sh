#!/usr/bin/env bash
#
# macOS Security Remediation Script
# Based on: macOS Security Audit and Remediation Plan
#
# Usage:
#   ./macos_security_remediation.sh           # Dry-run (show what would be done)
#   ./macos_security_remediation.sh --apply   # Apply fixes (with prompts)
#

set -euo pipefail

DRY_RUN=true
APPLY=false

for arg in "$@"; do
  case $arg in
    --apply) APPLY=true; DRY_RUN=false ;;
    --dry-run) DRY_RUN=true ;;
    -h|--help)
      echo "Usage: $0 [--apply|--dry-run]"
      echo "  --dry-run  Show what would be done (default)"
      echo "  --apply    Apply fixes with confirmation prompts"
      exit 0
      ;;
  esac
done

run_cmd() {
  if $DRY_RUN; then
    echo "  [DRY-RUN] Would run: $*"
  else
    echo "  Running: $*"
    "$@"
  fi
}

confirm() {
  if $DRY_RUN; then
    return 0
  fi
  echo -n "$1 (y/N): "
  read -r ans
  case "$ans" in
    [yY][eE][sS]|[yY]) return 0 ;;
    *) return 1 ;;
  esac
}

echo "=== macOS Security Remediation ==="
echo "Mode: $($DRY_RUN && echo 'DRY-RUN (no changes)' || echo 'APPLY (with confirmation)')"
echo ""

# --- Tier 1 ---
echo "--- Tier 1: Firewall ---"
FW_STATE=$(/usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate 2>/dev/null || true)
if [[ "$FW_STATE" == *"enabled"* ]]; then
  echo "  Firewall already enabled."
else
  echo "  Firewall is disabled."
  if confirm "Enable firewall?"; then
    run_cmd sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on
  fi
fi

STEALTH=$(/usr/libexec/ApplicationFirewall/socketfilterfw --getstealthmode 2>/dev/null || true)
if [[ "$STEALTH" == *"enabled"* ]]; then
  echo "  Stealth mode already enabled."
else
  echo "  Stealth mode is off."
  if confirm "Enable stealth mode?"; then
    run_cmd sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode on
  fi
fi
echo ""

echo "--- Tier 1: Gatekeeper ---"
GK_STATUS=$(spctl --status 2>/dev/null || true)
if [[ "$GK_STATUS" == *"enabled"* ]]; then
  echo "  Gatekeeper already enabled."
else
  if confirm "Enable Gatekeeper?"; then
    run_cmd sudo spctl --global-enable
  fi
fi
echo ""

echo "--- Tier 1: Screen Lock ---"
ASK_PW=$(defaults read com.apple.screensaver askForPassword 2>/dev/null || echo "0")
DELAY=$(defaults read com.apple.screensaver askForPasswordDelay 2>/dev/null || echo "-1")
if [[ "$ASK_PW" == "1" ]]; then
  echo "  Screen lock already requires password."
  if [[ "$DELAY" -gt 300 ]]; then
    echo "  Consider reducing delay to 300 (5 min) or 0 (immediate)."
  fi
else
  echo "  Screen lock may not require password."
  if confirm "Require password after 5 minutes? (0=immediate)"; then
    run_cmd defaults write com.apple.screensaver askForPassword -bool true
    run_cmd defaults write com.apple.screensaver askForPasswordDelay -int 300
    echo "  Note: Lock delay is 300 seconds. Use 0 for immediate."
  fi
fi
echo ""

echo "--- Tier 1: Software Updates ---"
echo "  To install updates, run: softwareupdate -i -a"
echo "  Or use System Settings > General > Software Update"
echo ""

echo "--- Tier 1: SSH (if Remote Login enabled) ---"
SSHD_D="/etc/ssh/sshd_config.d"
SSHD_LOCAL="${SSHD_D}/000-local.conf"
if [[ -d "$SSHD_D" ]]; then
  if [[ -f "$SSHD_LOCAL" ]] && grep -q "PasswordAuthentication no" "$SSHD_LOCAL" 2>/dev/null; then
    echo "  SSH password auth already disabled in local config."
  else
    echo "  To disable SSH password auth, create $SSHD_LOCAL with:"
    echo "    PasswordAuthentication no"
    echo "    ChallengeResponseAuthentication no"
    echo "    KbdInteractiveAuthentication no"
    echo "    PermitRootLogin no"
    echo "  Then: sudo launchctl kickstart -k system/com.openssh.sshd"
    echo "  (Skipping auto-creation — requires sudo and may affect remote access)"
  fi
else
  echo "  No sshd_config.d directory (older macOS). Edit /etc/ssh/sshd_config manually."
fi
echo ""

# --- Manual / GUI only ---
echo "--- Manual Steps (cannot be scripted) ---"
echo "  1. FileVault: System Settings > Privacy & Security > FileVault > Turn On"
echo "  2. Admin account: Create Standard account for daily use; use Admin only for installs"
echo "  3. TCC/Full Disk Access: System Settings > Privacy & Security > review and remove unnecessary apps"
echo "  4. DNS: System Settings > Network > [interface] > Details > DNS — add 9.9.9.9 or 1.1.1.1"
echo "  5. Apple ID 2FA: appleid.apple.com or System Settings > Apple ID"
echo "  6. Time Machine: System Settings > General > Time Machine > Add Backup Disk"
echo "  7. Find My: System Settings > Apple ID > Find My Mac"
echo "  8. Browser extensions: Review in Safari/Chrome/Firefox"
echo ""

# --- Tier 3 ---
echo "--- Tier 3: Homebrew Updates ---"
if command -v brew &>/dev/null; then
  OUTDATED=$(brew outdated 2>/dev/null | wc -l)
  if [[ "$OUTDATED" -gt 0 ]]; then
    echo "  $OUTDATED outdated packages. Run: brew update && brew upgrade"
    if confirm "Run brew update && brew upgrade now?"; then
      run_cmd brew update
      run_cmd brew upgrade
    fi
  else
    echo "  Homebrew packages are up to date."
  fi
else
  echo "  Homebrew not installed."
fi
echo ""

echo "=== Remediation complete ==="
echo "Review the audit report: scripts/macos_security_audit_report.md"
