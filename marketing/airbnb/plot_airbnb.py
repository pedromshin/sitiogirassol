"""
Generate Airbnb performance graphs from consolidated monthly data.
Run: python plot_airbnb.py
Outputs: PNG files in ./graphs/
"""
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from pathlib import Path

# Paths
BASE = Path(__file__).parent
DATA_PATH = BASE / "data" / "airbnb_monthly_consolidated.csv"
if not DATA_PATH.exists():
    DATA_PATH = BASE / "airbnb.csv"
OUT_DIR = BASE / "graphs"
OUT_DIR.mkdir(exist_ok=True)

# Load data
df = pd.read_csv(DATA_PATH)
df["month_start"] = pd.to_datetime(df["month_start"])
# Coerce numeric columns (empty strings -> NaN)
for col in ["revenue_brl", "nights_booked", "avg_daily_rate", "avg_length_of_stay_days",
            "avg_booking_window_days", "view_to_contact_pct", "contact_to_book_pct"]:
    df[col] = pd.to_numeric(df[col], errors="coerce")

# Style: clean, readable
plt.rcParams["figure.figsize"] = (10, 5)
plt.rcParams["font.size"] = 10
MONTH_FMT = mdates.DateFormatter("%b %Y")
MONTH_LOC = mdates.MonthLocator(interval=2)


def ax_month_format(ax):
    ax.xaxis.set_major_formatter(MONTH_FMT)
    ax.xaxis.set_major_locator(MONTH_LOC)
    plt.setp(ax.xaxis.get_majorticklabels(), rotation=45, ha="right")


# --- 1. Revenue & Bookings ---
fig, ax1 = plt.subplots(figsize=(10, 5))
ax1.bar(df["month_start"] - pd.Timedelta(days=10), df["revenue_brl"], width=20, color="#FF5A5F", alpha=0.85, label="Revenue (BRL)")
ax1.set_ylabel("Revenue (BRL)", color="#333")
ax1.tick_params(axis="y", colors="#333")
ax1.set_ylim(0, None)

ax2 = ax1.twinx()
ax2.plot(df["month_start"], df["bookings"], color="#00A699", marker="o", linewidth=2, markersize=8, label="Bookings")
ax2.set_ylabel("Bookings", color="#00A699")
ax2.tick_params(axis="y", colors="#00A699")
ax2.set_ylim(0, None)

ax_month_format(ax1)
ax1.set_title("Monthly Revenue & Bookings — Authentic Brazilian Sítio")
fig.legend(loc="upper right", bbox_to_anchor=(0.88, 0.92))
plt.tight_layout()
plt.savefig(OUT_DIR / "01_revenue_bookings.png", dpi=150, bbox_inches="tight")
plt.close()

# --- 2. Nights booked ---
fig, ax = plt.subplots(figsize=(10, 5))
ax.bar(df["month_start"], df["nights_booked"], width=20, color="#00A699", alpha=0.85)
ax.set_ylabel("Nights booked")
ax.set_xlabel("Month")
ax.set_title("Nights Booked per Month")
ax_month_format(ax)
ax.set_ylim(0, None)
plt.tight_layout()
plt.savefig(OUT_DIR / "02_nights_booked.png", dpi=150, bbox_inches="tight")
plt.close()

# --- 3. Conversion funnel rates ---
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8), sharex=True)

ax1.plot(df["month_start"], df["view_to_contact_pct"], color="#FF5A5F", marker="o", linewidth=2, markersize=6)
ax1.set_ylabel("View → Contact (%)")
ax1.set_title("View-to-Contact Rate")
ax1.set_ylim(0, None)
ax1.grid(True, alpha=0.3)
ax_month_format(ax1)

ax2.plot(df["month_start"], df["contact_to_book_pct"], color="#00A699", marker="s", linewidth=2, markersize=6)
ax2.set_ylabel("Contact → Book (%)")
ax2.set_xlabel("Month")
ax2.set_title("Contact-to-Book Rate")
ax2.set_ylim(0, None)
ax2.grid(True, alpha=0.3)
ax_month_format(ax2)

fig.suptitle("Conversion Funnel Rates by Month", fontsize=12, y=1.02)
plt.tight_layout()
plt.savefig(OUT_DIR / "03_conversion_rates.png", dpi=150, bbox_inches="tight")
plt.close()

# --- 4. Average daily rate (only months with bookings) ---
df_adr = df[df["avg_daily_rate"].notna()].copy()
if len(df_adr) > 0:
    fig, ax = plt.subplots(figsize=(10, 5))
    ax.bar(df_adr["month_start"], df_adr["avg_daily_rate"], width=20, color="#484848", alpha=0.85)
    ax.set_ylabel("ADR (BRL)")
    ax.set_xlabel("Month")
    ax.set_title("Average Daily Rate (months with bookings)")
    ax_month_format(ax)
    ax.set_ylim(0, None)
    plt.tight_layout()
    plt.savefig(OUT_DIR / "04_avg_daily_rate.png", dpi=150, bbox_inches="tight")
    plt.close()

# --- 5. Booking lead time (months with data) ---
df_lead = df[df["avg_booking_window_days"].notna()].copy()
if len(df_lead) > 0:
    fig, ax = plt.subplots(figsize=(10, 5))
    ax.bar(df_lead["month_start"], df_lead["avg_booking_window_days"], width=20, color="#FFB400", alpha=0.85)
    ax.set_ylabel("Days in advance")
    ax.set_xlabel("Month")
    ax.set_title("Average Booking Lead Time (days before check-in)")
    ax_month_format(ax)
    ax.set_ylim(0, None)
    plt.tight_layout()
    plt.savefig(OUT_DIR / "05_booking_lead_time.png", dpi=150, bbox_inches="tight")
    plt.close()

# --- 6. Dashboard: 2x2 summary ---
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Revenue
axes[0, 0].bar(df["month_start"], df["revenue_brl"], width=18, color="#FF5A5F", alpha=0.85)
axes[0, 0].set_title("Revenue (BRL)")
axes[0, 0].set_ylim(0, None)
ax_month_format(axes[0, 0])

# Bookings
axes[0, 1].bar(df["month_start"], df["bookings"], width=18, color="#00A699", alpha=0.85)
axes[0, 1].set_title("Bookings")
axes[0, 1].set_ylim(0, None)
ax_month_format(axes[0, 1])

# View → Contact
axes[1, 0].plot(df["month_start"], df["view_to_contact_pct"], color="#FF5A5F", marker="o", linewidth=1.5, markersize=5)
axes[1, 0].set_title("View-to-Contact (%)")
axes[1, 0].set_ylim(0, None)
axes[1, 0].grid(True, alpha=0.3)
ax_month_format(axes[1, 0])

# Contact → Book
axes[1, 1].plot(df["month_start"], df["contact_to_book_pct"], color="#00A699", marker="s", linewidth=1.5, markersize=5)
axes[1, 1].set_title("Contact-to-Book (%)")
axes[1, 1].set_ylim(0, None)
axes[1, 1].grid(True, alpha=0.3)
ax_month_format(axes[1, 1])

fig.suptitle("Airbnb Performance Dashboard — Brazilian Sítio", fontsize=14, y=1.01)
plt.tight_layout()
plt.savefig(OUT_DIR / "06_dashboard.png", dpi=150, bbox_inches="tight")
plt.close()

# --- 7. View-to-Book conversion % (full funnel rate) ---
df["view_to_book_pct"] = df["view_to_contact_pct"] * df["contact_to_book_pct"] / 100.0

fig, ax = plt.subplots(figsize=(10, 5))
ax.fill_between(df["month_start"], 0, df["view_to_book_pct"], alpha=0.35, color="#00A699")
ax.plot(df["month_start"], df["view_to_book_pct"], color="#00A699", marker="o", linewidth=2, markersize=8)
ax.set_ylabel("View → Book (%)")
ax.set_xlabel("Month")
ax.set_title("Overall Conversion: Views to Bookings (%)")
ax.set_ylim(0, None)
ax.grid(True, alpha=0.3)
ax_month_format(ax)
plt.tight_layout()
plt.savefig(OUT_DIR / "07_view_to_book_conversion.png", dpi=150, bbox_inches="tight")
plt.close()

# --- Estimated views & contacts from bookings and conversion rates ---
# contacts = bookings / (contact_to_book_pct/100); views = contacts / (view_to_contact_pct/100)
df["estimated_contacts"] = float("nan")
df["estimated_views"] = float("nan")
mask_book = (df["bookings"] > 0) & (df["contact_to_book_pct"] > 0)
df.loc[mask_book, "estimated_contacts"] = (df.loc[mask_book, "bookings"] * 100 / df.loc[mask_book, "contact_to_book_pct"]).round(0)
mask_view = mask_book & (df["view_to_contact_pct"] > 0)
df.loc[mask_view, "estimated_views"] = (df.loc[mask_view, "estimated_contacts"].astype(float) * 100 / df.loc[mask_view, "view_to_contact_pct"]).round(0)
# Ensure numeric for plotting
est_views = pd.to_numeric(df["estimated_views"], errors="coerce").fillna(0)
est_contacts = pd.to_numeric(df["estimated_contacts"], errors="coerce").fillna(0)

# --- 8. Conversion funnel: volumes (views, contacts, bookings) + conversion % ---
fig, (ax_vol, ax_pct) = plt.subplots(2, 1, figsize=(11, 9), sharex=True, gridspec_kw={"height_ratios": [1, 1]})

# Top: volumes (views, contacts, bookings)
x = df["month_start"]
w = 6  # bar width in days
ax_vol.bar(x - pd.Timedelta(days=w), est_views, width=w, color="#E8E8E8", alpha=0.9, label="Views (est.)")
ax_vol.bar(x, est_contacts, width=w, color="#FF5A5F", alpha=0.85, label="Contacts (est.)")
ax_vol.bar(x + pd.Timedelta(days=w), df["bookings"] * 1.0, width=w, color="#00A699", alpha=0.9, label="Bookings")
ax_vol.set_ylabel("Count")
ax_vol.set_title("Funnel volumes: Views → Contacts → Bookings (estimated where no view data)")
ax_vol.legend(loc="upper right", ncol=3)
ax_vol.set_ylim(0, None)
ax_vol.grid(True, alpha=0.3, axis="y")
ax_month_format(ax_vol)

# Bottom: conversion percentages
ax_pct.plot(df["month_start"], df["view_to_contact_pct"], color="#FF5A5F", marker="o", linewidth=2, markersize=6, label="View → Contact (%)")
ax_pct.plot(df["month_start"], df["contact_to_book_pct"], color="#FFB400", marker="s", linewidth=2, markersize=6, label="Contact → Book (%)")
ax_pct.plot(df["month_start"], df["view_to_book_pct"], color="#00A699", marker="^", linewidth=2, markersize=6, label="View → Book (%)")
ax_pct.set_ylabel("Conversion (%)")
ax_pct.set_xlabel("Month")
ax_pct.set_title("Conversion rates (%)")
ax_pct.set_ylim(0, None)
ax_pct.legend(loc="upper right", ncol=3)
ax_pct.grid(True, alpha=0.3)
ax_month_format(ax_pct)

fig.suptitle("Views to Books: Volumes & Conversion %", fontsize=13, y=1.01)
plt.tight_layout()
plt.savefig(OUT_DIR / "08_funnel_views_to_books.png", dpi=150, bbox_inches="tight")
plt.close()

# --- 9. Funnel bar (average rates = 100% → contact % → book %) ---
avg_view_contact = df["view_to_contact_pct"].mean()
avg_contact_book = df["contact_to_book_pct"].mean()
avg_view_book = df["view_to_book_pct"].mean()

fig, ax = plt.subplots(figsize=(8, 5))
stages = ["Views\n(100%)", "View → Contact", "Contact → Book", "View → Book"]
values = [100, avg_view_contact, avg_contact_book, avg_view_book]
colors = ["#E8E8E8", "#FF5A5F", "#FFB400", "#00A699"]
bars = ax.barh(stages, values, color=colors, height=0.5)
ax.set_xlim(0, 105)
ax.set_xlabel("Conversion (%)")
ax.set_title("Average Conversion Funnel (Views → Bookings)")
for bar, val in zip(bars, values):
    ax.text(val + 1, bar.get_y() + bar.get_height()/2, f"{val:.1f}%", va="center", fontsize=11)
plt.tight_layout()
plt.savefig(OUT_DIR / "09_funnel_average.png", dpi=150, bbox_inches="tight")
plt.close()

print(f"Graphs saved to: {OUT_DIR.resolve()}")
print("  - 01_revenue_bookings.png")
print("  - 02_nights_booked.png")
print("  - 03_conversion_rates.png")
print("  - 04_avg_daily_rate.png")
print("  - 05_booking_lead_time.png")
print("  - 06_dashboard.png")
print("  - 07_view_to_book_conversion.png")
print("  - 08_funnel_views_to_books.png")
print("  - 09_funnel_average.png")
