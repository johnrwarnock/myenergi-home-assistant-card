# myenergi Flow Card

Radial energy-flow card for Home Assistant, styled after the myenergi app: a self-consumption hub in the middle with solar, home, eddi, zappi, battery and grid/generator around it. Chevrons run along each spoke in the direction power is moving, faster for bigger flows.

## Config

```yaml
type: custom:myenergi-flow-card
title: Right now                 # optional
hub:
  self_consumption_entity: sensor.solar_share_of_load   # optional, otherwise calculated
  popup:                          # optional: show any card in a pop-up when the centre is tapped
    title: Solar & battery – today
    card:                         # any Lovelace card config
      type: energy-distribution
  tap_action:                     # used when there's no popup; any standard HA action. Default: the Energy dashboard
    action: navigate
    navigation_path: /energy
solar:
  name: Solar
  power_entity: sensor.solar_power
  daily_entity: sensor.solar_energy_today
home:
  name: House
  power_entity: sensor.house_load
eddi:
  name: Hot water
  power_entity: sensor.eddi_power
  status_entity: sensor.eddi_status
zappi:
  name: Car
  power_entity: sensor.zappi_power
  mode_entity: select.zappi_charge_mode
  status_entity: sensor.zappi_status      # set this to show the check when fully charged
  plug_entity: sensor.zappi_plug_status   # shows a crossed-out plug when no car is connected
battery:
  name: Batteries
  power_entity: sensor.battery_power    # + discharging / - charging (invert: true to flip)
  soc_entity: sensor.battery_soc
  idle_threshold_w: 100                 # net flow under this shows the battery as idle (default 100)
grid:
  name: Generator                       # or Grid
  icon: mdi:generator-stationary
  power_entity: sensor.generator_power  # + importing / - exporting
  hide_when_idle: true                  # handy for off-grid generators
display:
  flow_animation_speed: auto            # auto | fast | slow | off
  idle_threshold_w: 30
```

Tapping solar, home, battery, eddi or zappi opens Home Assistant's more-info dialog (with history) for that node's `power_entity`; set `tap_entity` on the node to open a different entity, e.g. a daily kWh sensor.

Tapping the centre opens `hub.popup` if set (no browser_mod needed; close with ✕, Escape or tapping outside). Otherwise it runs `hub.tap_action`, so it can navigate to a view, open more-info, or open a popup (e.g. `fire-dom-event` with browser_mod). Set `action: none` to disable it.

Any node you leave out isn't drawn. Power entities in kW are converted automatically. Icons are any `mdi:` icon. Inactive nodes don't show a power reading; the home reading remains visible above its circle. A check appears next to eddi when its status is "Max temp reached", and next to zappi when its `status_entity` reports "Fully charged", "Charge complete", "Completed", or "Charged", and next to the battery when SoC is above 98% and it isn't charging. A crossed-out plug appears next to zappi when `plug_entity` (or `status_entity`) reports "EV Disconnected".
