# macOS Security Audit Report

**Date:** 2025-02-28  
**System:** macOS 15.6 (Build 24G84)  
**User:** kaszek

---

## Executive Summary

| Tier | Passed | Failed | Manual |
|------|--------|--------|--------|
| Tier 1 | 2 | 5 | 2 |
| Tier 2 | 0 | 3 | 2 |
| Tier 3 | 2 | 2 | 1 |
| Tier 4 | 1 | 0 | 1 |

**Critical issues requiring immediate attention:** FileVault off, Firewall disabled, no Time Machine backup, pending macOS updates.

---

## Tier 1: Most Common

### 1.1 Disk Encryption (FileVault) — FAIL

| Check | Result |
|-------|--------|
| Status | **FileVault is Off** |
| Recovery key | N/A (FileVault not enabled) |

**Risk:** Physical theft or loss exposes all data.

**Remediation:** System Settings > Privacy & Security > FileVault > Turn On. Escrow recovery key with Apple ID or store securely. Requires reboot and encryption time.

---

### 1.2 Firewall — FAIL

| Check | Result |
|-------|--------|
| Firewall state | **Disabled (State = 0)** |
| Stealth mode | Off |

**Risk:** Unauthorized inbound connections; malware C2, lateral movement.

**Remediation:**
```bash
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode on
```

---

### 1.3 Gatekeeper — PASS

| Check | Result |
|-------|--------|
| Status | assessments enabled |

---

### 1.4 macOS Updates — FAIL

| Check | Result |
|-------|--------|
| OS version | macOS 15.6 (24G84) |
| Pending updates | Safari 26.3, macOS Sequoia 15.7.4, macOS Tahoe 26.3, Command Line Tools |

**Risk:** Known CVEs remain exploitable.

**Remediation:** Run Software Update or `softwareupdate -i -a` (with restart for OS updates).

---

### 1.5 Screen Lock — MANUAL

| Check | Result |
|-------|--------|
| Lock delay | Could not read via defaults (check System Settings) |
| Password | Verify in System Settings > Lock Screen |

**Remediation:** System Settings > Lock Screen > Require password after screen saver or display sleep (recommend: immediately or 5 minutes).

---

### 1.6 SSH Remote Login — MANUAL

| Check | Result |
|-------|--------|
| SSH access | User in `com.apple.access_ssh` group (Remote Login may be enabled) |
| Config | `/etc/ssh/sshd_config` includes `sshd_config.d/*`; no local overrides found |
| Password auth | Default config — verify `PasswordAuthentication` and `PermitRootLogin` |

**Remediation:** If Remote Login is used, disable password auth. Create `/etc/ssh/sshd_config.d/000-local.conf`:
```
PasswordAuthentication no
ChallengeResponseAuthentication no
KbdInteractiveAuthentication no
PermitRootLogin no
```
Then restart: `sudo launchctl kickstart -k system/com.openssh.sshd`

---

### 1.7 Admin Account for Daily Use — FAIL

| Check | Result |
|-------|--------|
| Account type | User is in `admin` group (80) |

**Risk:** Malware or user error gains full admin rights.

**Remediation:** Create a Standard account for daily work; use Admin account only for installs/updates. System Settings > Users & Groups.

---

## Tier 2: Common

### 2.1 TCC / Full Disk Access — MANUAL

| Check | Result |
|-------|--------|
| Full Disk Access | System Settings > Privacy & Security > Full Disk Access |
| Accessibility | Same section |

**Remediation:** Remove apps that do not strictly need FDA; avoid granting FDA to Terminal unless required.

---

### 2.2 DNS — FAIL

| Check | Result |
|-------|--------|
| Current DNS | Router: 192.168.15.1, IPv6: fe80::dac6:78ff:fe07:ff20%en0 |
| Secure DNS | Not using Quad9, Cloudflare, or similar |

**Risk:** Phishing, malware C2, ad/tracker domains resolve normally.

**Remediation:** System Settings > Network > Wi-Fi/Ethernet > Details > DNS. Add Quad9 (9.9.9.9) or Cloudflare (1.1.1.1).

---

### 2.3 Apple ID 2FA — MANUAL

| Check | Result |
|-------|--------|
| 2FA status | Verify at appleid.apple.com or System Settings > Apple ID |

**Remediation:** Enable two-factor authentication for Apple ID.

---

### 2.4 Backups — FAIL

| Check | Result |
|-------|--------|
| Time Machine | **No destinations configured** |
| iCloud | Verify in System Settings > Apple ID > iCloud |

**Risk:** Ransomware or hardware failure causes permanent data loss.

**Remediation:** System Settings > General > Time Machine > Add Backup Disk. Follow 3-2-1 strategy.

---

### 2.5 Find My — MANUAL

| Check | Result |
|-------|--------|
| Find My | System Settings > Apple ID > Find My Mac |

**Remediation:** Enable Find My Mac and Activation Lock.

---

## Tier 3: Less Common

### 3.1 LaunchAgents / LaunchDaemons — PASS (review recommended)

| Check | Result |
|-------|--------|
| User LaunchAgents | com.google.GoogleUpdater.wake.plist, com.google.keystone.agent.plist, com.google.keystone.xpcservice.plist |
| System LaunchDaemons | Bitdefender, Docker, Malwarebytes, Epson, Zoom, Wireshark, VB-Cable — all appear legitimate |

**Note:** Review Google updater and Keystone if not actively using Chrome/Google software.

---

### 3.2 Network Ports — PASS (no unexpected exposure)

| Check | Result |
|-------|--------|
| Listening TCP | rapportd (58967), ControlCenter (7000, 5000), EEventManager (2968), figma_agent (localhost), Python (8765), Cursor (localhost), node (3000), ngrok (localhost 4040) |
| Exposure | Most services bound to localhost; rapportd and ControlCenter on * — normal for Apple services |

**Remediation:** Disable unused sharing in System Settings > General > Sharing.

---

### 3.3 Folder Permissions — PASS

| Check | Result |
|-------|--------|
| /usr/local | root:wheel, correct |
| /opt/homebrew | kaszek:admin, correct for Homebrew |

---

### 3.4 Third-Party Software — FAIL

| Check | Result |
|-------|--------|
| Homebrew outdated | 29 packages: coder, ffmpeg, gh, git-lfs, gnutls, imagemagick, krb5, libssh, ollama, pandoc, postgresql, python@3.11, etc. |

**Remediation:** Run `brew update && brew upgrade` regularly.

---

### 3.5 Browser Extensions — MANUAL

| Check | Result |
|-------|--------|
| Extensions | Safari/Chrome/Firefox extension managers |

**Remediation:** Remove unused extensions; prefer minimal permissions.

---

## Tier 4: Rare

### 4.1 System Integrity Protection (SIP) — PASS

| Check | Result |
|-------|--------|
| SIP status | **enabled** |

---

### 4.2 Secure Boot — MANUAL

| Check | Result |
|-------|--------|
| Secure Boot | System Settings > General > Startup Disk (or Recovery > Startup Security Utility on Intel) |

---

### 4.3 Lockdown Mode — MANUAL

| Check | Result |
|-------|--------|
| Lockdown Mode | System Settings > Privacy & Security > Lockdown Mode |

---

### 4.4 Keychain — MANUAL

| Check | Result |
|-------|--------|
| Keychain | login.keychain-db present |
| Lock behavior | Keychain Access app > Preferences — set to lock when sleeping |

---

### 4.5 Zero-Day Mitigation — N/A

Stay on latest macOS; apply security updates immediately.

---

## Remediation Priority

1. **Immediate:** Enable FileVault, enable Firewall, apply macOS updates, configure Time Machine
2. **This week:** Configure secure DNS, review TCC permissions, enable 2FA, enable Find My
3. **Within 2 weeks:** Run `brew upgrade`, review LaunchAgents, review browser extensions
4. **As needed:** Secure Boot, Lockdown Mode, keychain lock settings
