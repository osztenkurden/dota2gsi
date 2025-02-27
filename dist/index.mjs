// src/items.ts
var items = [
  { name: "item_aegis", origin: "Aegis of the Immortal", price: 0 },
  { name: "item_boots_of_elves", origin: "Band of Elvenskin", price: 450 },
  { name: "item_belt_of_strength", origin: "Belt of Strength", price: 450 },
  { name: "item_blade_of_alacrity", origin: "Blade of Alacrity", price: 1e3 },
  { name: "item_blades_of_attack", origin: "Blades of Attack", price: 450 },
  { name: "item_blight_stone", origin: "Blight Stone", price: 300 },
  { name: "item_blink", origin: "Blink dagger", price: 2250 },
  { name: "item_boots", origin: "Boots of Speed", price: 500 },
  { name: "item_bottle", origin: "Bottle", price: 675 },
  { name: "item_broadsword", origin: "Broadsword", price: 1e3 },
  { name: "item_chainmail", origin: "Chainmail", price: 550 },
  { name: "item_cheese", origin: "Cheese", price: 1e3 },
  { name: "item_circlet", origin: "Circlet", price: 155 },
  { name: "item_clarity", origin: "Clarity", price: 50 },
  { name: "item_claymore", origin: "Claymore", price: 1350 },
  { name: "item_cloak", origin: "Cloak", price: 800 },
  { name: "item_crown", origin: "Crown", price: 450 },
  { name: "item_demon_edge", origin: "Demon Edge", price: 2200 },
  { name: "item_dust", origin: "Dust of Appearance", price: 80 },
  { name: "item_eagle", origin: "Eaglesong", price: 2800 },
  { name: "item_enchanted_mango", origin: "Enchanted Mango", price: 65 },
  { name: "item_energy_booster", origin: "Energy Booster", price: 800 },
  { name: "item_faerie_fire", origin: "Faerie Fire", price: 65 },
  { name: "item_gauntlets", origin: "Gauntlets of Strength", price: 140 },
  { name: "item_gem", origin: "Gem of True Sight", price: 900 },
  { name: "item_ghost", origin: "Ghost Scepter", price: 1500 },
  { name: "item_gloves", origin: "Gloves of Haste", price: 450 },
  { name: "item_flask", origin: "Healing Salve", price: 100 },
  { name: "item_helm_of_iron_will", origin: "Helm of Iron Will", price: 975 },
  { name: "item_hyperstone", origin: "Hyperstone", price: 2e3 },
  { name: "item_infused_raindrop", origin: "Infused Raindrops", price: 225 },
  { name: "item_branches", origin: "Iron Branch", price: 50 },
  { name: "item_javelin", origin: "Javelin", price: 1100 },
  { name: "item_magic_stick", origin: "Magic Stick", price: 200 },
  { name: "item_mantle", origin: "Mantle of Intelligence", price: 140 },
  { name: "item_mithril_hammer", origin: "Mithril Hammer", price: 1600 },
  { name: "item_lifesteal", origin: "Morbid Mask", price: 900 },
  { name: "item_mystic_staff", origin: "Mystic Staff", price: 2800 },
  { name: "item_ward_observer", origin: "Observer Wards", price: 0 },
  { name: "item_ogre_axe", origin: "Ogre Axe", price: 1e3 },
  { name: "item_orb_of_venom", origin: "Orb of Venom", price: 275 },
  { name: "item_platemail", origin: "Platemail", price: 1400 },
  { name: "item_point_booster", origin: "Point Booster", price: 1200 },
  { name: "item_quarterstaff", origin: "Quarterstaff", price: 875 },
  { name: "item_quelling_blade", origin: "Quelling Blade", price: 100 },
  { name: "item_reaver", origin: "Reaver", price: 2800 },
  { name: "item_refresher_shard", origin: "Refresher Shard", price: 1e3 },
  { name: "item_ring_of_health", origin: "Ring of Health", price: 700 },
  { name: "item_ring_of_protection", origin: "Ring of Protection", price: 175 },
  { name: "item_ring_of_regen", origin: "Ring of Regen", price: 175 },
  { name: "item_ring_of_tarrasque", origin: "Ring of Tarrasque", price: 1800 },
  { name: "item_robe", origin: "Robe of the Magi", price: 450 },
  { name: "item_relic", origin: "Sacred Relic", price: 3400 },
  { name: "item_sobi_mask", origin: "Sobi Mask", price: 175 },
  { name: "item_ward_sentry", origin: "Sentry Ward", price: 50 },
  { name: "item_shadow_amulet", origin: "Shadow Amulet", price: 1e3 },
  { name: "item_slippers", origin: "Slippers of Agility", price: 140 },
  { name: "item_smoke_of_deceit", origin: "Smoke of Deceit", price: 50 },
  { name: "item_staff_of_wizardry", origin: "Staff of Wizardry", price: 1e3 },
  { name: "item_stout_shield", origin: "Stout Shield", price: 100 },
  { name: "item_talisman_of_evasion", origin: "Talisman of Evasion", price: 1300 },
  { name: "item_tango", origin: "Tango", price: 90 },
  { name: "item_tome_of_knowledge", origin: "Tome of Knowledge", price: 75 },
  { name: "item_tpscroll", origin: "Teleport Scroll", price: 100 },
  { name: "item_ultimate_orb", origin: "Ultimate Orb", price: 2050 },
  { name: "item_vitality_booster", origin: "Vitality Booster", price: 1e3 },
  { name: "item_void_stone", origin: "Void Stone", price: 700 },
  { name: "item_wind_lace", origin: "Wind Lace", price: 250 },
  { name: "item_abyssal_blade", origin: "Abyssal Blade", price: 6250 },
  { name: "item_aeon_disk", origin: "Aeon Disk", price: 3e3 },
  { name: "item_aether_lens", origin: "Aether Lens", price: 2275 },
  { name: "item_ultimate_scepter_2", origin: "Aghanim's Blessing", price: 5800 },
  { name: "item_ultimate_scepter", origin: "Aghanim's Scepter", price: 4200 },
  { name: "item_aghanims_shard", origin: "Aghanim's Shard", price: 1400 },
  { name: "item_arcane_boots", origin: "Arcane Boots", price: 1300 },
  { name: "item_armlet", origin: "Armlet of Mordiggian", price: 2500 },
  { name: "item_assault", origin: "Assault Cuirass", price: 5125 },
  { name: "item_bfury", origin: "Battlefury", price: 4100 },
  { name: "item_black_king_bar", origin: "Black King Bar", price: 4050 },
  { name: "item_blade_mail", origin: "Blade Mail", price: 2100 },
  { name: "item_bloodstone", origin: "Bloodstone", price: 4400 },
  { name: "item_bloodthorn", origin: "Bloodthorn", price: 6800 },
  { name: "item_travel_boots", origin: "Boots of Travel", price: 2500 },
  { name: "item_bracer", origin: "Bracer", price: 505 },
  { name: "item_buckler", origin: "Buckler", price: 425 },
  { name: "item_butterfly", origin: "Butterfly", price: 4975 },
  { name: "item_crimson_guard", origin: "Crimson Guard", price: 3725 },
  { name: "item_lesser_crit", origin: "Crystalys", price: 1900 },
  { name: "item_greater_crit", origin: "Daedalus", price: 5100 },
  { name: "item_dagon_#(1-5)", origin: "Dagon", price: 2700 },
  { name: "item_desolator", origin: "Desolator", price: 3500 },
  { name: "item_diffusal_blade", origin: "Diffusal Blade", price: 2500 },
  { name: "item_diffusal_blade_2", origin: "Diffusal Blade", price: 3850 },
  { name: "item_dragon_lance", origin: "Dragon Lance", price: 1900 },
  { name: "item_ancient_janggo", origin: "Drum of Endurance", price: 1650 },
  { name: "item_echo_sabre", origin: "Echo Sabre", price: 2500 },
  { name: "item_ethereal_blade", origin: "Ethereal Blade", price: 4650 },
  { name: "item_cyclone", origin: "Eul's Scepter of Divinity", price: 2625 },
  { name: "item_skadi", origin: "Skadi", price: 5300 },
  { name: "item_force_staff", origin: "Force Staff", price: 2200 },
  { name: "item_glimmer_cape", origin: "Glimmer Cape", price: 2150 },
  { name: "item_guardian_greaves", origin: "Guardian Greaves", price: 4950 },
  { name: "item_hand_of_midas", origin: "Hand of Midas", price: 2200 },
  { name: "item_headdress", origin: "Headdress", price: 425 },
  { name: "item_heart", origin: "Heart of Tarrasque", price: 5100 },
  { name: "item_heavens_halberd", origin: "Heaven's Halberd", price: 3550 },
  { name: "item_helm_of_the_dominator", origin: "Helm of the Dominator", price: 2625 },
  { name: "item_hood_of_defiance", origin: "Hood of Defiance", price: 0 },
  { name: "item_hurricane_pike", origin: "Hurricane Pike", price: 4450 },
  { name: "item_iron_talon", origin: "Iron Talon", price: 0 },
  { name: "item_kaya", origin: "Kaya", price: 2050 },
  { name: "item_kaya_and_sange", origin: "Kaya and Sange", price: 4100 },
  { name: "item_sphere", origin: "Sphere", price: 4600 },
  { name: "item_lotus_orb", origin: "Lotus Orb", price: 3850 },
  { name: "item_maelstrom", origin: "Maelstrom", price: 2700 },
  { name: "item_magic_wand", origin: "Magic Wand", price: 450 },
  { name: "item_manta", origin: "Manta", price: 4600 },
  { name: "item_mask_of_madness", origin: "Mask of Madness", price: 1775 },
  { name: "item_medallion_of_courage", origin: "Medallion of Courage", price: 1025 },
  { name: "item_mekansm", origin: "Mekansm", price: 1775 },
  { name: "item_meteor_hammer", origin: "Meteor Hammer", price: 2400 },
  { name: "item_mjollnir", origin: "Mjollnir", price: 5500 },
  { name: "item_monkey_king_bar", origin: "Monkey King Bar", price: 4900 },
  { name: "item_moon_shard", origin: "Moon Shard", price: 4e3 },
  { name: "item_necronomicon_#(1-3)", origin: "Necronomicon", price: 2050 },
  { name: "item_null_talisman", origin: "Null Talisman", price: 505 },
  { name: "item_nullifier", origin: "Nullifier", price: 4375 },
  { name: "item_oblivion_staff", origin: "Oblivion Staff", price: 1500 },
  { name: "item_octarine_core", origin: "Octarine Core", price: 4600 },
  { name: "item_orchid", origin: "Orchid Malevolence", price: 3475 },
  { name: "item_pers", origin: "Perseverence", price: 1400 },
  { name: "item_phase_boots", origin: "Phase Boots", price: 1500 },
  { name: "item_pipe", origin: "Pipe of Insight", price: 3375 },
  { name: "item_power_treads", origin: "Power Treads", price: 1400 },
  { name: "item_radiance", origin: "Radiance", price: 4700 },
  { name: "item_rapier", origin: "Divine Rapier", price: 5600 },
  { name: "item_refresher", origin: "Refresher", price: 5e3 },
  { name: "item_ring_of_aquila", origin: "Ring of Aquila", price: 0 },
  { name: "item_ring_of_basilius", origin: "Ring of Basilius", price: 425 },
  { name: "item_rod_of_atos", origin: "Rod of Atos", price: 2250 },
  { name: "item_sange", origin: "Sange", price: 2050 },
  { name: "item_sange_and_yasha", origin: "Sange and Yasha", price: 4100 },
  { name: "item_satanic", origin: "Satanic", price: 5050 },
  { name: "item_sheepstick", origin: "Scythe of Vyse", price: 5550 },
  { name: "item_invis_sword", origin: "Shadow Blade", price: 3e3 },
  { name: "item_shivas_guard", origin: "Shiva's Guard", price: 4850 },
  { name: "item_silver_edge", origin: "Silver Edge", price: 5450 },
  { name: "item_basher", origin: "Skull Basher", price: 2875 },
  { name: "item_solar_crest", origin: "Solar Crest", price: 2425 },
  { name: "item_soul_booster", origin: "Soul Booster", price: 3e3 },
  { name: "item_soul_ring", origin: "Soul Ring", price: 805 },
  { name: "item_spirit_vessel", origin: "Spirit Vessel", price: 2780 },
  { name: "item_tranquil_boots", origin: "Tranquil Boots", price: 925 },
  { name: "item_urn_of_shadows", origin: "Urn of Shadows", price: 880 },
  { name: "item_vanguard", origin: "Vanguard", price: 1700 },
  { name: "item_veil_of_discord", origin: "Veil of Discord", price: 1525 },
  { name: "item_vladmir", origin: "Vladmir's Offering", price: 2450 },
  { name: "item_wraith_band", origin: "Wraith Band", price: 505 },
  { name: "item_yasha", origin: "Yasha", price: 2050 },
  { name: "item_yasha_and_kaya", origin: "Yasha and Kaya", price: 4100 },
  { name: "item_arcane_ring", origin: "Arcane Ring", price: 0 },
  { name: "item_broom_handle", origin: "Broom Handle", price: 0 },
  { name: "item_faded_broach", origin: "Faded Broach", price: 0 },
  { name: "item_ironwood_tree", origin: "Ironwood Tree", price: 0 },
  { name: "item_keen_optic", origin: "Keen Optic", price: 0 },
  { name: "item_mango_tree", origin: "Mango Tree", price: 0 },
  { name: "item_ocean_heart", origin: "Ocean Heart", price: 0 },
  { name: "item_royal_jelly", origin: "Royal Jelly", price: 0 },
  { name: "item_trusty_shovel", origin: "Trusty Shovel", price: 0 },
  { name: "item_clumsy_net", origin: "Clumsy Net", price: 0 },
  { name: "item_dragon_scale", origin: "Dragon Scale", price: 0 },
  { name: "item_essence_ring", origin: "Essence Ring", price: 0 },
  { name: "item_grove_bow", origin: "Grove Bow", price: 0 },
  { name: "item_imp_claw", origin: "Imp Claw", price: 0 },
  { name: "item_nether_shawl", origin: "Nether Shawl", price: 0 },
  { name: "item_vambrace", origin: "Vambrace", price: 0 },
  { name: "item_vampire_fangs", origin: "Vampire Fangs", price: 0 },
  { name: "item_craggy_coat", origin: "Craggy Coat", price: 0 },
  { name: "item_enchanted_quiver", origin: "Enchanted Quiver", price: 0 },
  { name: "item_greater_faerie_fire", origin: "Greater Faerie Fire", price: 0 },
  { name: "item_mind_breaker", origin: "Mind Breaker", price: 0 },
  { name: "item_orb_of_destruction", origin: "Orb of Destruction", price: 0 },
  { name: "item_paladin_sword", origin: "Paladin Sword", price: 0 },
  { name: "item_quickening_charm", origin: "Quickening Charm", price: 0 },
  { name: "item_repair_kit", origin: "Repair Kit", price: 0 },
  { name: "item_spider_legs", origin: "Spider Legs", price: 0 },
  { name: "item_spy_gadget", origin: "Telescope", price: 0 },
  { name: "item_titan_sliver", origin: "Titan Sliver", price: 0 },
  { name: "item_flicker", origin: "Flicker", price: 0 },
  { name: "item_havoc_hammer", origin: "Havoc Hammer", price: 0 },
  { name: "item_panic_button", origin: "Magic Lamp", price: 0 },
  { name: "item_minotaur_horn", origin: "Minotaur Horn", price: 0 },
  { name: "item_ninja_gear", origin: "Ninja Gear", price: 0 },
  { name: "item_spell_prism", origin: "Spell Prism", price: 0 },
  { name: "item_the_leveller", origin: "The Leveller", price: 0 },
  { name: "item_timeless_relic", origin: "Timeless Relic", price: 0 },
  { name: "item_witless_shako", origin: "Witless Shako", price: 0 },
  { name: "item_apex", origin: "Apex", price: 0 },
  { name: "item_ballista", origin: "Ballista", price: 0 },
  { name: "item_demonicon", origin: "Book of the Dead", price: 0 },
  { name: "item_ex_machina", origin: "Ex Machina", price: 0 },
  { name: "item_fallen_sky", origin: "Fallen Sky", price: 0 },
  { name: "item_force_boots", origin: "Force Boots", price: 0 },
  { name: "item_mirror_shield", origin: "Mirror Shield", price: 0 },
  { name: "item_pirate_hat", origin: "Pirate Hat", price: 0 },
  { name: "item_seer_stone", origin: "Seer Stone", price: 0 },
  { name: "item_desolator_2", origin: "Stygian Desolator", price: 0 },
  { name: "item_recipe_trident", origin: "Recipe: Trident", price: 1 },
  { name: "item_woodland_striders", origin: "Woodland Striders", price: 0 },
  { name: "item_elixir", origin: "Elixir", price: 0 },
  { name: "item_fusion_rune", origin: "Fusion Rune", price: 0 },
  { name: "item_helm_of_the_undying", origin: "Helm of the Undying", price: 0 },
  { name: "item_phoenix_ash", origin: "Phoenix Ash", price: 0 },
  { name: "item_third_eye", origin: "Third Eye", price: 0 },
  { name: "item_tome_of_aghanim", origin: "Tome of Aghanim", price: 0 },
  { name: "item_dimensional_doorway", origin: "Dimensional Doorway", price: 0 },
  { name: "item_greater_mango", origin: "Greater Mango", price: 0 },
  { name: "item_horizon", origin: "Horizon", price: 0 },
  { name: "item_halloween_candy_corn", origin: "Diretide/Greevil Taffy", price: 0 },
  { name: "item_greevil_whistle_toggle", origin: "Greeviling/Greevil Whistle", price: 0 },
  { name: "item_winter_stocking", origin: "Greeviling/Xmas Stocking", price: 0 },
  { name: "item_winter_skates", origin: "Greeviling/Speed Skates", price: 0 },
  { name: "item_winter_cake", origin: "Greeviling/Fruit-bit Cake", price: 0 },
  { name: "item_winter_cookie", origin: "Greeviling/Wizard Cookie", price: 0 },
  { name: "item_winter_coco", origin: "Greeviling/Cocoa with Marshmallows", price: 0 },
  { name: "item_winter_ham", origin: "Greeviling/Clove Studded Ham", price: 0 },
  { name: "item_winter_kringle", origin: "Greeviling/Kringle", price: 0 },
  { name: "item_winter_mushroom", origin: "Greeviling/Snow Mushroom", price: 0 },
  { name: "item_winter_greevil_treat", origin: "Greeviling/Greevil Treat", price: 0 },
  { name: "item_winter_greevil_garbage", origin: "Greeviling/Greevil Chow", price: 0 },
  { name: "item_winter_grevil_chewy", origin: "Greeviling/Greevil Blink Bone", price: 0 },
  { name: "item_greater_clarity", origin: "Greater Clarity", price: 90 },
  { name: "item_greater_flask", origin: "Wraith-Night/Greater Salve", price: 0 },
  { name: "item_arcane_boots_2", origin: "Wraith-Night/Arcane Boots II", price: 0 },
  { name: "item_tranquil_boots_2", origin: "Wraith-Night/Slippers of Halcyon", price: 0 },
  { name: "item_firecrackers", origin: "Flinching Firecrackers", price: 100 },
  { name: "item_firework_mine", origin: "Firework Mine", price: 1e3 },
  { name: "item_scare_the_beast", origin: "Fighting the Year Beast/Scare the Beast", price: 0 },
  { name: "item_vermillion_robe", origin: "Fighting the Year Beast/Vermillion Robe", price: 0 },
  { name: "item_river_painter", origin: "River Vial: Chrome", price: 0 },
  { name: "item_river_painter2", origin: "River Vial: Dry", price: 0 },
  { name: "item_river_painter3", origin: "River Vial: Slime", price: 0 },
  { name: "item_river_painter4", origin: "River Vial: Oil", price: 0 },
  { name: "item_river_painter5", origin: "River Vial: Electrified", price: 0 },
  { name: "item_river_painter6", origin: "River Vial: Potion", price: 0 },
  { name: "item_river_painter7", origin: "River Vial: Blood", price: 0 },
  { name: "item_ability_id", origin: "override", price: 0 },
  { name: "item_aghsfort_bloodstone", origin: "override", price: 1400 },
  { name: "item_aghsfort_travel_boots", origin: "override", price: 2500 },
  { name: "item_aghsfort_travel_boots_2", origin: "override", price: 0 },
  { name: "item_alt_charge_count", origin: "override", price: 0 },
  { name: "item_amount", origin: "override", price: 0 },
  { name: "item_arcanist_potion", origin: "override", price: 0 },
  { name: "item_bag_of_gold_caster_only", origin: "override", price: 0 },
  { name: "item_bottomless_chalice", origin: "Bottomless Chalice", price: 0 },
  { name: "item_build_category", origin: "override", price: 0 },
  { name: "item_build_index", origin: "override", price: 0 },
  { name: "item_charge_count", origin: "override", price: 0 },
  { name: "item_class", origin: "override", price: 0 },
  { name: "item_clientacks.txt", origin: "override", price: 0 },
  { name: "item_cooldown_reduction", origin: "override", price: 0 },
  { name: "item_dagon_2", origin: "Dagon", price: 3950 },
  { name: "item_dagon_3", origin: "Dagon", price: 5200 },
  { name: "item_dagon_4", origin: "Dagon", price: 6450 },
  { name: "item_dagon_5", origin: "Dagon", price: 7700 },
  { name: "item_datadriven", origin: "override", price: 0 },
  { name: "item_debug", origin: "override", price: 0 },
  { name: "item_def0", origin: "override", price: 0 },
  { name: "item_def1", origin: "override", price: 0 },
  { name: "item_def6", origin: "override", price: 0 },
  { name: "item_def7", origin: "override", price: 0 },
  { name: "item_def%d", origin: "override", price: 0 },
  { name: "item_def_for_price", origin: "override", price: 0 },
  { name: "item_definition_index_t", origin: "override", price: 0 },
  { name: "item_description_alt", origin: "override", price: 0 },
  { name: "item_elixer", origin: "Elixer", price: 0 },
  { name: "item_equip_state", origin: "override", price: 0 },
  { name: "item_gold_spent", origin: "override", price: 0 },
  { name: "item_grandmasters_glaive", origin: "Grandmaster's Glaive", price: 5e3 },
  { name: "item_gungir", origin: "Gleipnir", price: 5650 },
  { name: "item_has_escalating_chance", origin: "override", price: 0 },
  { name: "item_has_escalating_chance_by_rarity", origin: "override", price: 0 },
  { name: "item_helm_of_the_dominator_2", origin: "override", price: 0 },
  { name: "item_hero_pick_count", origin: "override", price: 0 },
  { name: "item_hero_pick_percent", origin: "override", price: 0 },
  { name: "item_hero_win_count", origin: "override", price: 0 },
  { name: "item_hero_win_percent", origin: "override", price: 0 },
  { name: "item_i", origin: "override", price: 0 },
  { name: "item_iconname", origin: "override", price: 0 },
  { name: "item_illusionsts_cape", origin: "Illusionsts Cape", price: 0 },
  { name: "item_image", origin: "override", price: 0 },
  { name: "item_includes_extra_gems", origin: "override", price: 0 },
  { name: "item_index", origin: "override", price: 0 },
  { name: "item_level", origin: "override", price: 0 },
  { name: "item_level_max", origin: "override", price: 0 },
  { name: "item_level_min", origin: "override", price: 0 },
  { name: "item_levels", origin: "override", price: 0 },
  { name: "item_lore", origin: "override", price: 0 },
  { name: "item_lua", origin: "override", price: 0 },
  { name: "item_lunar_crest", origin: "Lunar Crest", price: 2300 },
  { name: "item_mysterious_hat", origin: "Fairy's Trinket", price: 0 },
  { name: "item_n", origin: "override", price: 0 },
  { name: "item_name_new", origin: "override", price: 0 },
  { name: "item_name_old", origin: "override", price: 0 },
  { name: "item_necronomicon_2", origin: "Necronomicon", price: 0 },
  { name: "item_necronomicon_3", origin: "Necronomicon", price: 0 },
  { name: "item_nian_flag_trap", origin: "override", price: 0 },
  { name: "item_ofrenda", origin: "Beloved Memory", price: 0 },
  { name: "item_ofrenda_pledge", origin: "Forebearer's Fortune", price: 0 },
  { name: "item_ogre_seal_totem", origin: "Ogre Seal Totem", price: 0 },
  { name: "item_orb_of_pestilence", origin: "override", price: 0 },
  { name: "item_owner_name", origin: "override", price: 0 },
  { name: "item_owner_type", origin: "override", price: 0 },
  { name: "item_owning_bundle_name", origin: "override", price: 0 },
  { name: "item_pack", origin: "override", price: 0 },
  { name: "item_panel_id", origin: "override", price: 0 },
  { name: "item_passives", origin: "override", price: 0 },
  { name: "item_penta_edged_sword", origin: "Penta-Edged Sword", price: 0 },
  { name: "item_pick_count", origin: "override", price: 0 },
  { name: "item_pick_rate", origin: "override", price: 0 },
  { name: "item_player_pick_count", origin: "override", price: 0 },
  { name: "item_player_pick_percent", origin: "override", price: 0 },
  { name: "item_player_slot", origin: "override", price: 0 },
  { name: "item_player_win_count", origin: "override", price: 0 },
  { name: "item_player_win_percent", origin: "override", price: 0 },
  { name: "item_pocket_roshan", origin: "Pocket Roshan", price: 1e3 },
  { name: "item_pogo_stick", origin: "Tumbler's Toy", price: 0 },
  { name: "item_prefab", origin: "override", price: 0 },
  { name: "item_rarity_class", origin: "override", price: 0 },
  { name: "item_rarity_name", origin: "override", price: 0 },
  { name: "item_rarity_token", origin: "override", price: 0 },
  { name: "item_redemption", origin: "override", price: 0 },
  { name: "item_regular_price", origin: "override", price: 0 },
  { name: "item_replace", origin: "override", price: 0 },
  { name: "item_restriction_desc", origin: "override", price: 0 },
  { name: "item_%s", origin: "override", price: 0 },
  { name: "item_sale_amount", origin: "override", price: 0 },
  { name: "item_schema_initialized", origin: "override", price: 0 },
  { name: "item_seasonal_restriction", origin: "override", price: 0 },
  { name: "item_set_name", origin: "override", price: 0 },
  { name: "item_sets", origin: "override", price: 0 },
  { name: "item_sort_index", origin: "override", price: 0 },
  { name: "item_spooky_tpscroll", origin: "override", price: 100 },
  { name: "item_spring2021_defusal_bomb", origin: "override", price: 0 },
  { name: "item_state", origin: "override", price: 0 },
  { name: "item_state_class", origin: "override", price: 0 },
  { name: "item_steam_cache_version_t", origin: "override", price: 0 },
  { name: "item_style_count", origin: "override", price: 0 },
  { name: "item_style_%d", origin: "override", price: 0 },
  { name: "item_subtitle", origin: "override", price: 0 },
  { name: "item_super_blink", origin: "override", price: 0 },
  { name: "item_super_overwhelming_blink", origin: "override", price: 0 },
  { name: "item_tango_single", origin: "Tango Single Instance", price: 30 },
  { name: "item_title_tag", origin: "override", price: 0 },
  { name: "item_tombstone", origin: "override", price: 0 },
  { name: "item_tome_of_omniscience", origin: "override", price: 10 },
  { name: "item_tool", origin: "override", price: 0 },
  { name: "item_tpscroll_2", origin: "override", price: 100 },
  { name: "item_travel_boots_2", origin: "Boots of Travel", price: 4500 },
  { name: "item_type", origin: "override", price: 0 },
  { name: "item_type_name", origin: "override", price: 0 },
  { name: "item_ultimate_scepter_roshan", origin: "Aghanim's Blessing - Roshan", price: 5800 },
  { name: "item_uneditable_description", origin: "override", price: 0 },
  { name: "item_upgraded_barricade", origin: "override", price: 0 },
  { name: "item_upgraded_mortar", origin: "override", price: 0 },
  { name: "item_vengeances_shadow", origin: "Shadow of Vengeance", price: 0 },
  { name: "item_ward_dispenser", origin: "Observer and Sentry Wards", price: 50 },
  { name: "item_win_count", origin: "override", price: 0 },
  { name: "item_win_rate", origin: "override", price: 0 },
  { name: "item_blood_grenade", origin: "Blood Grenade", price: 50 },
  { name: "item_diadem", origin: "Diadem", price: 1e3 },
  { name: "item_blitz_knuckles", origin: "Blitz Knuckles", price: 1e3 },
  { name: "item_cornucopia", origin: "Cornucopia", price: 1200 },
  { name: "item_fluffy_hat", origin: "Fluffy Hat", price: 250 },
  { name: "item_voodoo_mask", origin: "Voodoo Mask", price: 700 },
  { name: "item_orb_of_corrosion", origin: "Orb of Corrosion", price: 925 },
  { name: "item_falcon_blade", origin: "Falcon Blade", price: 1125 },
  { name: "item_helm_of_the_overlord", origin: "Helm of the Overlord", price: 6400 },
  { name: "item_pavise", origin: "Pavise", price: 1400 },
  { name: "item_holy_locket", origin: "Holy Locket", price: 2400 },
  { name: "item_wraith_pact", origin: "Wraith Pact", price: 4050 },
  { name: "item_boots_of_bearing", origin: "Boots of Bearing", price: 4275 },
  { name: "item_witch_blade", origin: "Witch Blade", price: 2600 },
  { name: "item_wind_waker", origin: "Wind Waker", price: 6825 },
  { name: "item_eternal_shroud", origin: "Eternal Shroud", price: 3100 },
  { name: "item_mage_slayer", origin: "Mage Slayer", price: 2500 },
  { name: "item_phylactery", origin: "Phylactery", price: 2375 },
  { name: "item_harpoon", origin: "Harpoon", price: 4500 },
  { name: "item_arcane_blink", origin: "Arcane Blink", price: 6800 },
  { name: "item_overwhelming_blink", origin: "Overwhelming Blink", price: 6800 },
  { name: "item_swift_blink", origin: "Swift Blink", price: 6800 },
  { name: "item_orb_of_revelations", origin: "Orb of Revelations", price: 0 },
  { name: "item_voidwalker_scythe", origin: "Voidwalker Scythe", price: 3900 },
  { name: "item_flying_courier", origin: "Flying Courier", price: 100 },
  { name: "item_greater_salve", origin: "Greater Salve", price: 275 },
  { name: "item_slippers_of_halcyon", origin: "Slippers of Halcyon", price: 2075 },
  { name: "item_creed_of_omniscience", origin: "Creed of Omniscience", price: 10 },
  { name: "item_pelt_of_the_old_wolf", origin: "Pelt of the Old Wolf", price: 30 },
  { name: "item_paw_of_lucius", origin: "Paw of Lucius", price: 25 },
  { name: "item_sign_of_the_arachnid", origin: "Sign of the Arachnid", price: 65 },
  { name: "item_unhallowed_icon", origin: "Unhallowed Icon", price: 75 },
  { name: "item_preserved_skull", origin: "Preserved Skull", price: 60 },
  { name: "item_treads_of_ermacor", origin: "Treads of Ermacor", price: 90 },
  { name: "item_guardian_shell", origin: "Guardian Shell", price: 70 },
  { name: "item_carapace_of_qaldin", origin: "Carapace of Qaldin", price: 130 },
  { name: "item_ice_dragon_maw", origin: "Ice Dragon Maw", price: 40 },
  { name: "item_precious_egg", origin: "Precious Egg", price: 45 },
  { name: "item_ambient_sorcery", origin: "Ambient Sorcery", price: 35 },
  { name: "item_gravel_foot", origin: "Gravel Foot", price: 55 },
  { name: "item_stonework_pendant", origin: "Stonework Pendant", price: 65 },
  { name: "item_lifestone", origin: "Lifestone", price: 50 },
  { name: "item_slippers_of_the_abyss", origin: "Slippers of the Abyss", price: 130 },
  { name: "item_wand_of_the_brine", origin: "Wand of the Brine", price: 110 },
  { name: "item_glimmerdark_shield", origin: "Glimmerdark Shield", price: 160 },
  { name: "item_lance_of_pursuit", origin: "Lance of Pursuit", price: 0 },
  { name: "item_occult_bracelet", origin: "Occult Bracelet", price: 0 },
  { name: "item_possessed_mask", origin: "Possessed Mask", price: 0 },
  { name: "item_seeds_of_serenity", origin: "Seeds of Serenity", price: 0 },
  { name: "item_bullwhip", origin: "Bullwhip", price: 0 },
  { name: "item_dagger_of_ristul", origin: "Dagger of Ristul", price: 0 },
  { name: "item_eye_of_the_vizier", origin: "Eye of the Vizier", price: 0 },
  { name: "item_philosophers_stone", origin: "Philosopher's Stone", price: 0 },
  { name: "item_pupils_gift", origin: "Pupil's Gift", price: 0 },
  { name: "item_specialists_array", origin: "Mechanical Release", price: 0 },
  { name: "item_ceremonial_robe", origin: "Ceremonial Robe", price: 0 },
  { name: "item_cloak_of_flames", origin: "Cloak Of Flames", price: 0 },
  { name: "item_elven_tunic", origin: "Elven Tunic", price: 0 },
  { name: "item_psychic_headband", origin: "Psychic Headband", price: 0 },
  { name: "item_stormcrafter", origin: "Stormcrafter", price: 0 },
  { name: "item_trickster_cloak", origin: "Trickster Cloak", price: 0 },
  { name: "item_book_of_shadows", origin: "Book Of Shadows", price: 0 },
  { name: "item_giants_ring", origin: "Giant's Ring", price: 0 },
  { name: "item_chipped_vest", origin: "Chipped Vest", price: 0 },
  { name: "item_poor_mans_shield", origin: "Poor Man's Shield", price: 0 },
  { name: "item_princes_knife", origin: "Prince's Knife", price: 0 },
  { name: "item_quicksilver_amulet", origin: "Quicksilver Amulet", price: 0 },
  { name: "item_ancient_perseverance", origin: "Ancient Perseverance", price: 0 },
  { name: "item_assassins_dagger", origin: "Assassin's Dagger", price: 0 },
  { name: "item_gladiator_helm", origin: "Gladiator Helm", price: 0 },
  { name: "item_gloves_of_travel", origin: "Gloves Of Travel", price: 0 },
  { name: "item_icarus_wings", origin: "Icarus Wings", price: 0 },
  { name: "item_light_robes", origin: "Light Robes", price: 0 },
  { name: "item_mechanical_arm", origin: "Mechanical Arm", price: 0 },
  { name: "item_oakheart", origin: "Oakheart", price: 0 },
  { name: "item_overflowing_elixir", origin: "Overflowing Elixir", price: 0 },
  { name: "item_satchel", origin: "Satchel", price: 0 },
  { name: "item_star_mace", origin: "Star Mace", price: 0 },
  { name: "item_venom_gland", origin: "Venom Gland", price: 0 },
  { name: "item_warhammer", origin: "Warhammer", price: 0 },
  { name: "item_wizard_glass", origin: "Wizard Glass", price: 0 },
  { name: "item_book_of_strength", origin: "Book of Strength", price: 0 },
  { name: "item_book_of_agility", origin: "Book of Agility", price: 0 },
  { name: "item_book_of_intelligence", origin: "Book of Intelligence", price: 0 },
  { name: "item_aghanims_shard_roshan", origin: "Aghanim's Shard", price: 1400 },
  { name: "item_ascetic_cap", origin: "Ascetic's Cap", price: 0 },
  { name: "item_bag_of_gold", origin: "Gold", price: 0 },
  { name: "item_band_of_elvenskin", origin: '"Spider Queens Band"', price: 750 },
  { name: "item_bear_cloak", origin: "Cloak of the Bear", price: 30 },
  { name: "item_courier", origin: "Animal Courier", price: 50 },
  { name: "item_crimson_robe", origin: "Vermillion Robe", price: 9750 },
  { name: "item_es_arcana_blink", origin: "Greevil Blink Bone", price: 0 },
  { name: "item_gem_of_true_sight", origin: "Potent Gem", price: 1850 },
  { name: "item_hand_of_midas_ogre_arcana", origin: "Ogre Seal Totem", price: 0 },
  { name: "item_martyrs_plate", origin: "Shadow Plate", price: 2600 },
  { name: "item_pocket_tower", origin: "Pocket Campfire", price: 300 },
  { name: "item_revenants_brooch", origin: "Revenant's Brooch", price: 6200 },
  { name: "item_royale_with_cheese", origin: "Flask", price: 2 },
  { name: "item_tome_of_shadow_wave", origin: "Shadow of Vengeance", price: 0 },
  { name: "item_recipe_abyssal_blade", origin: "Recipe: Abyssal Blade", price: 1675 },
  { name: "item_recipe_aeon_disk", origin: "Recipe: Aeon Disk", price: 1200 },
  { name: "item_recipe_aether_lens", origin: "Recipe: Aether Lens", price: 775 },
  { name: "item_recipe_armlet", origin: "Recipe: Armlet of Mordiggian", price: 625 },
  { name: "item_recipe_assault", origin: "Recipe: Assault Cuirass", price: 1300 },
  { name: "item_recipe_black_king_bar", origin: "Recipe: Black King Bar", price: 1450 },
  { name: "item_recipe_blade_mail", origin: "Recipe: Blade Mail", price: 550 },
  { name: "item_recipe_bloodstone", origin: "Recipe: Bloodstone", price: 700 },
  { name: "item_recipe_bloodthorn", origin: "Recipe: Bloodthorn", price: 825 },
  { name: "item_recipe_buckler", origin: "Recipe: Buckler", price: 250 },
  { name: "item_recipe_lesser_crit", origin: "Recipe: Crystalys", price: 450 },
  { name: "item_recipe_greater_crit", origin: "Recipe: Daedalus", price: 1e3 },
  { name: "item_recipe_diffusal_blade", origin: "Recipe: Diffusal Blade", price: 1050 },
  { name: "item_recipe_dragon_lance", origin: "Recipe: Dragon Lance", price: 450 },
  { name: "item_recipe_ancient_janggo", origin: "Recipe: Drum of Endurance", price: 500 },
  { name: "item_recipe_ethereal_blade", origin: "Recipe: Ethereal Blade", price: 1100 },
  { name: "item_recipe_force_staff", origin: "Recipe: Force Staff", price: 950 },
  { name: "item_recipe_glimmer_cape", origin: "Recipe: Glimmer Cape", price: 350 },
  { name: "item_recipe_guardian_greaves", origin: "Recipe: Guardian Greaves", price: 1450 },
  { name: "item_recipe_hand_of_midas", origin: "Recipe: Hand of Midas", price: 1750 },
  { name: "item_recipe_headdress", origin: "Recipe: Headdress", price: 250 },
  { name: "item_recipe_heart", origin: "Recipe: Heart of Tarrasque", price: 1300 },
  { name: "item_recipe_helm_of_the_dominator", origin: "Recipe: Helm of the Dominator", price: 650 },
  { name: "item_recipe_hurricane_pike", origin: "Recipe: Hurricane Pike", price: 350 },
  { name: "item_recipe_kaya", origin: "Recipe: Kaya", price: 600 },
  { name: "item_recipe_magic_wand", origin: "Recipe: Magic Wand", price: 150 },
  { name: "item_recipe_manta", origin: "Recipe: Manta", price: 500 },
  { name: "item_recipe_mekansm", origin: "Recipe: Mekasmm", price: 800 },
  { name: "item_recipe_meteor_hammer", origin: "Recipe: Meteor Hammer", price: 550 },
  { name: "item_recipe_mjollnir", origin: "Recipe: Mjollnir", price: 800 },
  { name: "item_recipe_monkey_king_bar", origin: "Recipe: Monkey King Bar", price: 600 },
  { name: "item_recipe_orchid", origin: "Recipe: Orchid Malevolence", price: 275 },
  { name: "item_recipe_pipe", origin: "Recipe: Pipe of Insight", price: 1450 },
  { name: "item_recipe_refresher", origin: "Recipe: Refresher", price: 2600 },
  { name: "item_recipe_ring_of_basilius", origin: "Recipe: Ring of Basilius", price: 250 },
  { name: "item_recipe_rod_of_atos", origin: "Recipe: Rod of Atos", price: 250 },
  { name: "item_recipe_sange", origin: "Recipe: Sange", price: 600 },
  { name: "item_recipe_silver_edge", origin: "Recipe: Silver Edge", price: 550 },
  { name: "item_recipe_basher", origin: "Recipe: Skull Basher", price: 825 },
  { name: "item_recipe_solar_crest", origin: "Recipe: Solar Crest", price: 700 },
  { name: "item_recipe_soul_ring", origin: "Recipe: Soul Ring", price: 350 },
  { name: "item_recipe_spirit_vessel", origin: "Recipe: Spirit Vessel", price: 1200 },
  { name: "item_recipe_urn_of_shadows", origin: "Recipe: Urn of Shadows", price: 375 },
  { name: "item_recipe_veil_of_discord", origin: "Recipe: Veil of Discord", price: 650 },
  { name: "item_recipe_yasha", origin: "Recipe: Yasha", price: 600 },
  { name: "item_recipe_aghsfort_bloodstone", origin: "override", price: 0 },
  { name: "item_recipe_ancient_perseverance", origin: "override", price: 0 },
  { name: "item_recipe_apex", origin: "override", price: 0 },
  { name: "item_recipe_arcane_boots", origin: "Recipe: Arcane Boots", price: 0 },
  { name: "item_recipe_arcane_ring", origin: "override", price: 0 },
  { name: "item_recipe_ballista", origin: "override", price: 0 },
  { name: "item_recipe_bfury", origin: "Recipe: Battlefury", price: 450 },
  { name: "item_recipe_book_of_shadows", origin: "override", price: 0 },
  { name: "item_recipe_bracer", origin: "Recipe: Bracer", price: 210 },
  { name: "item_recipe_broom_handle", origin: "override", price: 0 },
  { name: "item_recipe_bullwhip", origin: "override", price: 0 },
  { name: "item_recipe_butterfly", origin: "Recipe: Butterfly", price: 0 },
  { name: "item_recipe_ceremonial_robe", origin: "override", price: 0 },
  { name: "item_recipe_chipped_vest", origin: "override", price: 0 },
  { name: "item_recipe_cloak_of_flames", origin: "override", price: 0 },
  { name: "item_recipe_clumsy_net", origin: "override", price: 0 },
  { name: "item_recipe_cyclone", origin: "Recipe: Eul's Scepter of Divinity", price: 675 },
  { name: "item_recipe_dagon", origin: "Recipe: Dagon", price: 1150 },
  { name: "item_recipe_dagon_2", origin: "override", price: 0 },
  { name: "item_recipe_dagon_3", origin: "override", price: 0 },
  { name: "item_recipe_dagon_4", origin: "override", price: 0 },
  { name: "item_recipe_dagon_5", origin: "override", price: 0 },
  { name: "item_recipe_demonicon", origin: "override", price: 0 },
  { name: "item_recipe_desolator", origin: "Recipe: Desolator", price: 0 },
  { name: "item_recipe_desolator_2", origin: "override", price: 0 },
  { name: "item_recipe_diffusal_blade_2", origin: "override", price: 0 },
  { name: "item_recipe_dimensional_doorway", origin: "override", price: 0 },
  { name: "item_recipe_dragon_scale", origin: "override", price: 0 },
  { name: "item_recipe_eagle_eye", origin: "override", price: 0 },
  { name: "item_recipe_echo_sabre", origin: "Recipe: Echo Sabre", price: 0 },
  { name: "item_recipe_elven_tunic", origin: "override", price: 0 },
  { name: "item_recipe_enchanted_quiver", origin: "override", price: 0 },
  { name: "item_recipe_essence_ring", origin: "override", price: 0 },
  { name: "item_recipe_ex_machina", origin: "override", price: 0 },
  { name: "item_recipe_faded_broach", origin: "override", price: 0 },
  { name: "item_recipe_fallen_sky", origin: "Recipe: Fallen Sky", price: 0 },
  { name: "item_recipe_fluffy_hat", origin: "override", price: 0 },
  { name: "item_recipe_force_boots", origin: "override", price: 0 },
  { name: "item_recipe_fortitude_ring", origin: "override", price: 0 },
  { name: "item_recipe_giants_ring", origin: "override", price: 0 },
  { name: "item_recipe_gladiator_helm", origin: "override", price: 0 },
  { name: "item_recipe_gloves_of_travel", origin: "override", price: 0 },
  { name: "item_recipe_grandmasters_glaive", origin: "Recipe: Grandmaster's Glaive", price: 0 },
  { name: "item_recipe_grove_bow", origin: "override", price: 0 },
  { name: "item_recipe_gungir", origin: "Recipe: Gleipnir", price: 700 },
  { name: "item_recipe_havoc_hammer", origin: "override", price: 0 },
  { name: "item_recipe_helm_of_the_dominator_2", origin: "override", price: 0 },
  { name: "item_recipe_hood_of_defiance", origin: "Recipe: Hood of Defiance", price: 0 },
  { name: "item_recipe_illusionsts_cape", origin: "override", price: 0 },
  { name: "item_recipe_invis_sword", origin: "Recipe: Invisibility Sword", price: 0 },
  { name: "item_recipe_iron_talon", origin: "Recipe: Iron Talon", price: 1 },
  { name: "item_recipe_ironwood_tree", origin: "Recipe: Ironwood Tree", price: 1 },
  { name: "item_recipe_kaya_and_sange", origin: "Recipe: Kaya and Sange", price: 0 },
  { name: "item_recipe_keen_optic", origin: "override", price: 0 },
  { name: "item_recipe_lunar_crest", origin: "Recipe: Lunar Crest", price: 250 },
  { name: "item_recipe_maelstrom", origin: "Recipe: Maelstrom", price: 0 },
  { name: "item_recipe_magus_minimus", origin: "override", price: 0 },
  { name: "item_recipe_mask_of_dispair", origin: "override", price: 0 },
  { name: "item_recipe_mask_of_madness", origin: "Recipe: Mask of Madness", price: 0 },
  { name: "item_recipe_medallion_of_courage", origin: "Recipe: Medallion of Courage", price: 0 },
  { name: "item_recipe_mind_breaker", origin: "override", price: 0 },
  { name: "item_recipe_mind_breaker_2", origin: "override", price: 0 },
  { name: "item_recipe_minotaur_horn", origin: "override", price: 0 },
  { name: "item_recipe_moon_shard", origin: "Recipe: Moon Shard", price: 0 },
  { name: "item_recipe_mysterious_hat", origin: "override", price: 0 },
  { name: "item_recipe_naginata", origin: "override", price: 0 },
  { name: "item_recipe_necronomicon", origin: "Recipe: Necronomicon", price: 1250 },
  { name: "item_recipe_necronomicon_2", origin: "override", price: 0 },
  { name: "item_recipe_necronomicon_3", origin: "override", price: 0 },
  { name: "item_recipe_nether_shawl", origin: "override", price: 0 },
  { name: "item_recipe_ninja_gear", origin: "override", price: 0 },
  { name: "item_recipe_nullifier", origin: "Recipe: Nullifier", price: 0 },
  { name: "item_recipe_null_talisman", origin: "Recipe: Null Talisman", price: 210 },
  { name: "item_recipe_oakheart", origin: "override", price: 0 },
  { name: "item_recipe_oblivion_staff", origin: "Recipe: Oblivion Staff", price: 0 },
  { name: "item_recipe_ocean_heart", origin: "override", price: 0 },
  { name: "item_recipe_octarine_core", origin: "Recipe: Octarine Core", price: 200 },
  { name: "item_recipe_orb_of_destruction", origin: "override", price: 0 },
  { name: "item_recipe_orb_of_pestilence", origin: "override", price: 0 },
  { name: "item_recipe_orb_of_revelations", origin: "override", price: 0 },
  { name: "item_recipe_overflowing_elixir", origin: "override", price: 0 },
  { name: "item_recipe_paladin_sword", origin: "override", price: 0 },
  { name: "item_recipe_panic_button", origin: "override", price: 0 },
  { name: "item_recipe_penta_edged_sword", origin: "override", price: 0 },
  { name: "item_recipe_pers", origin: "Recipe: Perseverence", price: 0 },
  { name: "item_recipe_phase_boots", origin: "Recipe: Phase Boots", price: 0 },
  { name: "item_recipe_phoenix_ash", origin: "override", price: 0 },
  { name: "item_recipe_phylactery", origin: "Recipe: Phylactery", price: 0 },
  { name: "item_recipe_pirate_hat", origin: "override", price: 0 },
  { name: "item_recipe_poor_mans_shield", origin: "Recipe: Poor Man's Shield", price: 0 },
  { name: "item_recipe_possessed_mask", origin: "override", price: 0 },
  { name: "item_recipe_power_treads", origin: "Recipe: Power Treads", price: 0 },
  { name: "item_recipe_psychic_headband", origin: "override", price: 0 },
  { name: "item_recipe_pupils_gift", origin: "override", price: 0 },
  { name: "item_recipe_quickening_charm", origin: "override", price: 0 },
  { name: "item_recipe_quicksilver_amulet", origin: "override", price: 0 },
  { name: "item_recipe_radiance", origin: "Recipe: Radiance", price: 0 },
  { name: "item_recipe_rapier", origin: "Recipe: Divine Rapier", price: 0 },
  { name: "item_recipe_ring_of_aquila", origin: "Recipe: Ring of Aquila", price: 0 },
  { name: "item_recipe_sange_and_yasha", origin: "Recipe: Sange and Yasha", price: 0 },
  { name: "item_recipe_satanic", origin: "Recipe: Satanic", price: 0 },
  { name: "item_recipe_seer_stone", origin: "override", price: 0 },
  { name: "item_recipe_sheepstick", origin: "Recipe: Scythe of Vyse", price: 0 },
  { name: "item_recipe_skadi", origin: "Recipe: Skadi", price: 0 },
  { name: "item_recipe_sorcerers_staff", origin: "override", price: 0 },
  { name: "item_recipe_soul_booster", origin: "Recipe: Soul Booster", price: 0 },
  { name: "item_recipe_star_mace", origin: "override", price: 0 },
  { name: "item_recipe_stormcrafter", origin: "override", price: 0 },
  { name: "item_recipe_tenderizer", origin: "override", price: 0 },
  { name: "item_recipe_the_leveller", origin: "override", price: 0 },
  { name: "item_recipe_timeless_relic", origin: "override", price: 0 },
  { name: "item_recipe_titan_sliver", origin: "override", price: 0 },
  { name: "item_recipe_tranquil_boots", origin: "Recipe: Tranquil Boots", price: 0 },
  { name: "item_recipe_tranquil_boots2", origin: "override", price: 0 },
  { name: "item_recipe_travel_boots", origin: "Recipe: Boots of Travel", price: 2e3 },
  { name: "item_recipe_travel_boots_2", origin: "Recipe: Boots of Travel", price: 0 },
  { name: "item_recipe_trickster_cloak", origin: "override", price: 0 },
  { name: "item_recipe_trusty_shovel", origin: "override", price: 0 },
  { name: "item_recipe_ultimate_scepter_2", origin: "Recipe: Aghanim's Blessing Recipe", price: 1600 },
  { name: "item_recipe_vambrace", origin: "override", price: 0 },
  { name: "item_recipe_vanguard", origin: "Recipe: Vanguard", price: 0 },
  { name: "item_recipe_vengeances_shadow", origin: "override", price: 0 },
  { name: "item_recipe_venom_gland", origin: "override", price: 0 },
  { name: "item_recipe_vermillion_robe", origin: "override", price: 0 },
  { name: "item_recipe_vladmir", origin: "Recipe: Vladimir", price: 250 },
  { name: "item_recipe_voidwalker_scythe", origin: "override", price: 0 },
  { name: "item_recipe_ward_dispenser", origin: "Recipe: Ward Dispenser", price: 0 },
  { name: "item_recipe_warhammer", origin: "override", price: 0 },
  { name: "item_recipe_wizard_glass", origin: "override", price: 0 },
  { name: "item_recipe_woodland_striders", origin: "override", price: 0 },
  { name: "item_recipe_wraith_band", origin: "Recipe: Wraith Band", price: 210 },
  { name: "item_recipe_yasha_and_kaya", origin: "Recipe: Yasha and Kaya", price: 0 },
  { name: "item_recipe_arcane_blink", origin: "Recipe: Arcane Blink", price: 1750 },
  { name: "item_recipe_boots_of_bearing", origin: "Recipe: Boots of Bearing", price: 1700 },
  { name: "item_recipe_crimson_guard", origin: "Recipe: Crimson Guard", price: 1050 },
  { name: "item_recipe_eternal_shroud", origin: "Recipe: Eternal Shroud", price: 600 },
  { name: "item_recipe_falcon_blade", origin: "Recipe: Falcon Blade", price: 250 },
  { name: "item_recipe_heavens_halberd", origin: "Recipe: Heaven's Halberd", price: 200 },
  { name: "item_recipe_helm_of_the_overlord", origin: "Recipe: Helm of the Dominator", price: 1325 },
  { name: "item_recipe_holy_locket", origin: "Recipe: Holy Locket", price: 525 },
  { name: "item_recipe_mage_slayer", origin: "Recipe: Mage Slayer", price: 200 },
  { name: "item_recipe_orb_of_corrosion", origin: "Recipe: Orb of Corrosion", price: 100 },
  { name: "item_recipe_overwhelming_blink", origin: "Recipe: Overwhelming Blink", price: 1750 },
  { name: "item_recipe_revenants_brooch", origin: "Recipe: Revenant's Brooch", price: 800 },
  { name: "item_recipe_shivas_guard", origin: "Recipe: Shiva's Guard", price: 650 },
  { name: "item_recipe_swift_blink", origin: "Recipe: Swift Blink", price: 1750 },
  { name: "item_recipe_wind_waker", origin: "Recipe: Wind Waker", price: 1400 },
  { name: "item_recipe_witch_blade", origin: "Recipe: Witch Blade", price: 600 },
  { name: "item_recipe_wraith_pact", origin: "Recipe: Wraith Pact", price: 400 },
  { name: "item_recipe_sphere", origin: "Recipe: Sphere", price: 1350 },
  { name: "item_crown", origin: "Crown", price: 450 },
  { name: "item_famango", origin: "Healing Lotus", price: 0 },
  { name: "item_recipe_samurai_tabi", origin: "Recipe: Samurai Tabi", price: 1100 },
  { name: "item_samurai_tabi", origin: "Samurai Tabi", price: 4500 },
  { name: "item_recipe_hermes_sandals", origin: "Recipe: Hermes Sandals", price: 500 },
  { name: "item_hermes_sandals", origin: "Hermes Sandals", price: 4800 },
  { name: "item_recipe_witches_switch", origin: "Recipe: Witches Switch", price: 625 },
  { name: "item_witches_switch", origin: "Witches Switch", price: 1900 },
  { name: "item_dagon", origin: "Dagon", price: 2850 },
  { name: "item_necronomicon", origin: "Necronomicon", price: 2050 },
  { name: "item_recipe_ultimate_scepter", origin: "Recipe: Scepter", price: 0 },
  { name: "item_recipe_lotus_orb", origin: "Recipe: Lotus Orb", price: 250 },
  { name: "item_recipe_disperser", origin: "Recipe: Disperser", price: 1e3 },
  { name: "item_disperser", origin: "Disperser", price: 5700 },
  { name: "item_recipe_pavise", origin: "Recipe: Pavise", price: 275 },
  { name: "item_mutation_tombstone", origin: "Mutation Tombstone", price: 0 },
  { name: "item_force_field", origin: "Arcanist's Armor", price: 0 },
  { name: "item_black_powder_bag", origin: "Blast Rig", price: 0 },
  { name: "item_spark_of_courage", origin: "Spark Of Courage", price: 0 },
  { name: "item_trident", origin: "Trident", price: 0 },
  { name: "item_heavy_blade", origin: "Witchbane", price: 0 },
  { name: "item_unstable_wand", origin: "Pig Pole", price: 0 },
  { name: "item_fortitude_ring", origin: "Ring of Fortitude", price: 0 },
  { name: "item_paintball", origin: "Fae Grenade", price: 0 },
  { name: "item_recipe_harpoon", origin: "Recipe: Harpoon", price: 1e3 },
  { name: "item_wand_of_sanctitude", origin: "Wand of Sanctity", price: 0 },
  { name: "item_great_famango", origin: "Great Healing Lotus", price: 0 },
  { name: "item_greater_famango", origin: "Greater Healing Lotus", price: 0 },
  { name: "item_tiara_of_selemene", origin: "Tiara of Selemene", price: 1800 },
  { name: "item_recipe_angels_demise", origin: "Khanda Recipe", price: 600 },
  { name: "item_angels_demise", origin: "Khanda", price: 5e3 },
  { name: "item_aetherial_halo", origin: "Aetherial Hammer", price: 5900 },
  { name: "item_caster_rapier", origin: "Caster Rapier", price: 5600 },
  { name: "item_combo_breaker", origin: "combo_breaker", price: 0 },
  { name: "item_devastator", origin: "Parasma", price: 5575 },
  { name: "item_sample_picker", origin: "Assassin's Contract", price: 0 },
  { name: "item_misericorde", origin: "Brigand's Blade", price: 0 },
  { name: "item_slime_vial", origin: "slime_vial", price: 0 },
  { name: "item_defiant_shell", origin: "Defiant Shell", price: 0 },
  { name: "item_arcane_scout", origin: "arcane_scout", price: 0 },
  { name: "item_barricade", origin: "barricade", price: 0 },
  { name: "item_manacles_of_power", origin: "manacles_of_power", price: 0 },
  { name: "item_ofrenda_shovel", origin: "Scrying Shovel", price: 0 },
  { name: "item_muertas_gun", origin: "Mercy & Grace", price: 0 },
  { name: "item_tier1_token", origin: "Tier 1 Token", price: 0 },
  { name: "item_tier2_token", origin: "Tier 2 Token", price: 0 },
  { name: "item_tier3_token", origin: "Tier 3 Token", price: 0 },
  { name: "item_tier4_token", origin: "Tier 4 Token", price: 0 },
  { name: "item_tier5_token", origin: "Tier 5 Token", price: 0 },
  { name: "item_vindicators_axe", origin: "Vindicator's Axe", price: 0 },
  { name: "item_duelist_gloves", origin: "Duelist Gloves", price: 0 },
  { name: "item_ancient_guardian", origin: "Ancient Guardian", price: 0 },
  { name: "item_safety_bubble", origin: "Safety Bubble", price: 0 },
  { name: "item_whisper_of_the_dread", origin: "Whisper of the Dread", price: 0 },
  { name: "item_nemesis_curse", origin: "Nemesis Curse", price: 0 },
  { name: "item_avianas_feather", origin: "Aviana's Feather", price: 0 },
  { name: "item_unwavering_condition", origin: "Unwavering Condition", price: 0 },
  { name: "item_horizons_equilibrium", origin: "Horizon's Equilibrium", price: 0 },
  { name: "item_blighted_spirit", origin: "Blighted Spirit", price: 0 },
  { name: "item_dandelion_amulet", origin: "Dandelion Amulet", price: 0 },
  { name: "item_turtle_shell", origin: "Turtle Shell", price: 0 },
  { name: "item_gossamer_cape", origin: "Gossamer Cape", price: 0 },
  { name: "item_light_collector", origin: "Light Collector", price: 0 },
  { name: "item_rattlecage", origin: "Rattlecage", price: 0 },
  { name: "item_doubloon", origin: "Doubloon", price: 0 },
  { name: "item_roshans_banner", origin: "Roshan's Banner", price: 0 }
];
var items_default = items;

// src/items_prices.ts
var itemDefinitions = items_default.reduce((p, x) => {
  p[x.name] = x;
  return p;
}, {});
var getItem = (itemName) => {
  if (itemName in itemDefinitions) {
    return itemDefinitions[itemName];
  }
  return {
    name: itemName,
    price: 0,
    origin: "unknown"
  };
};

// src/utils.ts
var getPlayersAttribute = (playerId, data, attribute) => {
  const identifier = `player${playerId}`;
  const attributeSlots = data[attribute]?.team2[identifier] || data[attribute]?.team3[identifier];
  if (!attributeSlots) return [];
  const response = [];
  for (const [key, entry] of Object.entries(attributeSlots)) {
    if (!entry && entry !== 0) continue;
    const id = Number(key.replace(/([^0-9])/g, ""));
    if (isNaN(id)) continue;
    if (attribute === "abilities") {
      const element = {
        ...entry,
        id
      };
      response.push(element);
    } else if (attribute === "items") {
      const type = key.replace(/([0-9])/g, "");
      const element = {
        ...entry,
        type,
        id
      };
      response.push(element);
    } else if (attribute === "wearables") {
      const type = key.replace(/([0-9])/g, "");
      const element = {
        id,
        type,
        value: entry
      };
      response.push(element);
    }
  }
  return response;
};
var getPlayersCourier = (id, couriers, lastCouriers, team) => {
  for (const courier in couriers) {
    if (!couriers[courier]) continue;
    if (Number(couriers[courier].owner) === id) return parseCourier(couriers[courier], lastCouriers[id], team);
  }
  return void 0;
};
var parsePlayer = (basePlayer, id, data, extensions, lastData) => {
  const extension = extensions.find((player2) => player2.steamid === basePlayer.steamid);
  const identifier = `player${id}`;
  const targetHero = data.hero.team2[identifier] || data.hero.team3[identifier] || null;
  if (targetHero && targetHero.facet !== null && targetHero.facet !== void 0) {
    targetHero.facetIndex = targetHero.facet - 1;
  }
  const player = {
    ...basePlayer,
    id,
    hero: targetHero,
    abilities: getPlayersAttribute(id, data, "abilities"),
    items: getPlayersAttribute(id, data, "items"),
    wearables: getPlayersAttribute(id, data, "wearables"),
    name: extension && extension.name || basePlayer.name,
    defaultName: basePlayer.name,
    country: extension && extension.country || null,
    avatar: extension && extension.avatar || null,
    extra: extension && extension.extra || {},
    realName: extension && extension.realName || null,
    courier: getPlayersCourier(
      id,
      data.couriers || {},
      lastData ? lastData.players.flatMap((x) => x.courier ? [x.courier] : []) : [],
      basePlayer.team_name
    ) || null,
    kill_list: []
  };
  for (const [key, value] of Object.entries(basePlayer.kill_list || {})) {
    if (!value) continue;
    const victimid = Number(key.replace(/([^0-9])/g, ""));
    const existingEntry = player.kill_list.find((killEntry) => killEntry.victimid === victimid);
    if (!existingEntry) {
      player.kill_list.push({
        victimid,
        amount: value
      });
      continue;
    }
    existingEntry.amount = value;
  }
  return player;
};
var parseTeam = (map, type, extension) => ({
  ward_purchase_cooldown: map[type === "dire" ? `dire_ward_purchase_cooldown` : "radiant_ward_purchase_cooldown"],
  name: extension && extension.name || type.toUpperCase(),
  map_score: extension && extension.map_score || 0,
  extra: extension && extension.extra || {},
  id: extension && extension.id || null,
  country: extension && extension.country || null,
  logo: extension && extension.logo || null,
  short_name: extension && extension.short_name || null
});
var parseMap = (rawMap, extensions) => {
  const map = {
    name: rawMap.name,
    matchid: rawMap.matchid,
    game_state: rawMap.game_state,
    game_time: rawMap.game_time,
    clock_time: rawMap.clock_time,
    daytime: rawMap.daytime,
    nightstalker_night: rawMap.nightstalker_night,
    paused: rawMap.paused,
    win_team: rawMap.win_team,
    customgamename: rawMap.customgamename,
    roshan_state: rawMap.roshan_state,
    roshan_state_end_seconds: rawMap.roshan_state_end_seconds,
    radiant_win_chance: rawMap.radiant_win_chance,
    dire: parseTeam(rawMap, "dire", extensions.dire),
    radiant: parseTeam(rawMap, "radiant", extensions.radiant)
  };
  return map;
};
var parseBuilding = (buildingKey, building) => {
  const side = buildingKey.includes("good") ? "good" : "bad";
  const faction = side === "good" ? "radiant" : "dire";
  let attack = null;
  let type = "tower";
  let order = null;
  if (buildingKey.includes("rax")) {
    type = "rax";
    attack = buildingKey.includes("melee") ? "melee" : "range";
  } else if (buildingKey.includes("fort")) {
    type = "fort";
  } else {
    const towerNumber = Number(buildingKey.substr(buildingKey.indexOf("tower") + 5, 1));
    if (!isNaN(towerNumber)) {
      order = towerNumber;
    }
  }
  const lastSegment = buildingKey.substring(buildingKey.lastIndexOf("_") + 1);
  const position = ["top", "bot", "mid"].includes(lastSegment) ? lastSegment : null;
  return {
    side,
    faction,
    attack,
    type,
    position,
    number: order,
    ...building
  };
};
var parseDraft = (draft) => {
  const entries = [];
  const keys = Object.keys(draft).sort();
  for (const key of keys) {
    if (key === "home_team") continue;
    const order = Number(key.replace(/([^0-9])/g, ""));
    if (isNaN(order)) continue;
    const type = key.startsWith("pick") ? "pick" : "ban";
    const value = draft[key];
    let currentEntry = entries.find((entry) => entry.order === order && entry.type === type);
    if (!currentEntry) {
      currentEntry = {
        player_id: 0,
        type,
        class: "",
        order
      };
      entries.push(currentEntry);
    }
    if (key.includes("_id")) {
      currentEntry.player_id = value;
    } else {
      currentEntry.class = value;
    }
  }
  return entries;
};
var parseCourier = (courier, lastCourier, team) => {
  const items2 = [];
  for (const item in courier.items) {
    items2.push(courier.items[item]);
  }
  let lostItems = [];
  if (!courier.alive && lastCourier) {
    if (!lastCourier.alive) {
      lostItems = lastCourier.lost_items;
    } else {
      lostItems = lastCourier.items;
    }
  }
  return {
    ...courier,
    items: items2.map((x) => ({
      name: x.name,
      owner: Number(x.owner)
    })),
    team: team === void 0 ? void 0 : team === "radiant" ? "radiant" : "dire",
    owner: Number(courier.owner),
    lost_items: lostItems
  };
};
var parseOutposts = (minimap) => {
  if (!minimap) return {};
  const outposts = Object.values(minimap).filter((x) => x.unitname === "npc_dota_watch_tower");
  const outsideNorth = outposts.find((x) => x.ypos > 6e3);
  const jungleNorth = outposts.find((x) => x.ypos > 0 && x.ypos < 6e3);
  const jungleSouth = outposts.find((x) => x.ypos > -6e3 && x.ypos < 0);
  const outsideSouth = outposts.find((x) => x.ypos < -6e3);
  return {
    outsideNorth: !(outsideNorth && outsideNorth.team) ? void 0 : outsideNorth.team === 2 ? "radiant" : "dire",
    jungleNorth: !(jungleNorth && jungleNorth.team) ? void 0 : jungleNorth.team === 2 ? "radiant" : "dire",
    jungleSouth: !(jungleSouth && jungleSouth.team) ? void 0 : jungleSouth.team === 2 ? "radiant" : "dire",
    outsideSouth: !(outsideSouth && outsideSouth.team) ? void 0 : outsideSouth.team === 2 ? "radiant" : "dire"
  };
};
var checkItemTier = (tier) => {
  for (const value of ["item0", "item1", "item2", "item3", "item4"]) {
    if (tier[value] === void 0) {
      return false;
    }
  }
  return true;
};
var parseTierIntoOldFormat = (players, tier) => {
  const result = players.map((player, i) => {
    const item = {
      state: "equipped",
      tier: 0,
      name: "",
      level: 0,
      enchantment_name: "",
      enchantment_level: 0,
      player_id: i
    };
    const currentTier = player[`tier${tier}`];
    if ("choice0" in currentTier.trinket_choices) {
      const trinket_choices = currentTier.trinket_choices;
      const choices = [trinket_choices.choice0, trinket_choices.choice1, trinket_choices.choice2, trinket_choices.choice3];
      const selectedChoice = choices.find((choice) => choice.selected);
      if (selectedChoice) {
        item.name = selectedChoice.item_name;
        item.level = selectedChoice.item_level;
      }
    }
    if ("choice0" in currentTier.enchantment_choices) {
      const enchantment_choices = currentTier.enchantment_choices;
      const choices = [enchantment_choices.choice0, enchantment_choices.choice1, enchantment_choices.choice2, enchantment_choices.choice3];
      const selectedChoice = choices.find((choice) => choice.selected);
      if (selectedChoice) {
        item.enchantment_name = selectedChoice.item_name;
        item.enchantment_level = selectedChoice.item_level || 1;
      }
    }
    return item;
  });
  return {
    item0: result[0],
    item1: result[1],
    item2: result[2],
    item3: result[3],
    item4: result[4]
  };
};
var parseNeutralItemsTeamIntoOldFormat = (team) => {
  const players = [team.player0, team.player1, team.player2, team.player3, team.player4];
  const result = {
    items_found: team.items_found,
    tier0: parseTierIntoOldFormat(players, 0),
    tier1: parseTierIntoOldFormat(players, 1),
    tier2: parseTierIntoOldFormat(players, 2),
    tier3: parseTierIntoOldFormat(players, 3),
    tier4: parseTierIntoOldFormat(players, 4)
  };
  return result;
};
var parseNeutralItemTierIntoOldFormat = (tier) => {
  return {
    ...tier,
    max_count: 1
  };
};
var parseNeutralItemsIntoOldFormat = (neutralItems) => {
  const result = {
    tier0: parseNeutralItemTierIntoOldFormat(neutralItems.tier0),
    tier1: parseNeutralItemTierIntoOldFormat(neutralItems.tier1),
    tier2: parseNeutralItemTierIntoOldFormat(neutralItems.tier2),
    tier3: parseNeutralItemTierIntoOldFormat(neutralItems.tier3),
    tier4: parseNeutralItemTierIntoOldFormat(neutralItems.tier4),
    team2: parseNeutralItemsTeamIntoOldFormat(neutralItems.team2),
    team3: parseNeutralItemsTeamIntoOldFormat(neutralItems.team3)
  };
  return result;
};
var parseNeutralItems = (currentTime, neutralItems, lastNeutralItems) => {
  if (!neutralItems) return void 0;
  const newNeutralItems = parseNeutralItemsIntoOldFormat(neutralItems);
  if (!lastNeutralItems) return newNeutralItems;
  const result = { ...newNeutralItems };
  const teams = [
    [result.team2, lastNeutralItems.team2],
    [result.team3, lastNeutralItems.team3]
  ];
  for (const [nowTeam, lastTeam] of teams) {
    if (!nowTeam || !lastTeam) continue;
    for (const [tierNow, tierThen] of [
      [nowTeam.tier0, lastTeam.tier0],
      [nowTeam.tier1, lastTeam.tier1],
      [nowTeam.tier2, lastTeam.tier2],
      [nowTeam.tier3, lastTeam.tier3],
      [nowTeam.tier4, lastTeam.tier4]
    ]) {
      if (!tierNow || !tierThen) continue;
      if (tierThen.completion_time) {
        tierNow.completion_time = tierThen.completion_time;
      } else if (!checkItemTier(tierThen) && checkItemTier(tierNow)) {
        tierNow.completion_time = currentTime;
      }
    }
  }
  return newNeutralItems;
};

// src/index.ts
var DOTA2GSI = class {
  descriptors;
  maxListeners;
  teams;
  players;
  last;
  current;
  constructor() {
    this.descriptors = /* @__PURE__ */ new Map();
    this.teams = {
      radiant: null,
      dire: null
    };
    this.maxListeners = 10;
    this.players = [];
  }
  eventNames = () => {
    const listeners = this.descriptors.entries();
    const nonEmptyEvents = [];
    for (const entry of listeners) {
      if (entry[1] && entry[1].length > 0) {
        nonEmptyEvents.push(entry[0]);
      }
    }
    return nonEmptyEvents;
  };
  getMaxListeners = () => this.maxListeners;
  listenerCount = (eventName) => {
    const listeners = this.listeners(eventName);
    return listeners.length;
  };
  listeners = (eventName) => {
    const descriptors = this.descriptors.get(eventName) || [];
    return descriptors.map((descriptor) => descriptor.listener);
  };
  removeListener = (eventName, listener) => {
    return this.off(eventName, listener);
  };
  off = (eventName, listener) => {
    const descriptors = this.descriptors.get(eventName) || [];
    this.descriptors.set(
      eventName,
      descriptors.filter((descriptor) => descriptor.listener !== listener)
    );
    this.emit("removeListener", eventName, listener);
    return this;
  };
  addListener = (eventName, listener) => {
    return this.on(eventName, listener);
  };
  on = (eventName, listener) => {
    this.emit("newListener", eventName, listener);
    const listOfListeners = [...this.descriptors.get(eventName) || []];
    listOfListeners.push({ listener, once: false });
    this.descriptors.set(eventName, listOfListeners);
    return this;
  };
  once = (eventName, listener) => {
    const listOfListeners = [...this.descriptors.get(eventName) || []];
    listOfListeners.push({ listener, once: true });
    this.descriptors.set(eventName, listOfListeners);
    return this;
  };
  prependListener = (eventName, listener) => {
    const listOfListeners = [...this.descriptors.get(eventName) || []];
    listOfListeners.unshift({ listener, once: false });
    this.descriptors.set(eventName, listOfListeners);
    return this;
  };
  emit = (eventName, arg, arg2) => {
    const listeners = this.descriptors.get(eventName);
    if (!listeners || listeners.length === 0) return false;
    listeners.forEach((listener) => {
      if (listener.once) {
        this.descriptors.set(
          eventName,
          listeners.filter((listenerInArray) => listenerInArray !== listener)
        );
      }
      listener.listener(arg, arg2);
    });
    return true;
  };
  prependOnceListener = (eventName, listener) => {
    const listOfListeners = [...this.descriptors.get(eventName) || []];
    listOfListeners.unshift({ listener, once: true });
    this.descriptors.set(eventName, listOfListeners);
    return this;
  };
  removeAllListeners = (eventName) => {
    this.descriptors.set(eventName, []);
    return this;
  };
  setMaxListeners = (n) => {
    this.maxListeners = n;
    return this;
  };
  rawListeners = (eventName) => {
    return this.descriptors.get(eventName) || [];
  };
  digest = (rawGSI) => {
    if (!rawGSI || !rawGSI.map) return null;
    const rawPlayers = [];
    for (const [key, player] of Object.entries({ ...rawGSI.player.team2, ...rawGSI.player.team3 })) {
      const id = Number(key.replace(/([^0-9])/g, ""));
      if (isNaN(id) || !player) continue;
      rawPlayers.push({ id, player });
    }
    const rawBuildings = [];
    for (const [id, building] of Object.entries(
      rawGSI.buildings ? { ...rawGSI.buildings.dire, ...rawGSI.buildings.radiant } : {}
    )) {
      if (!building) continue;
      rawBuildings.push({ id, building });
    }
    const players = rawPlayers.map((data) => parsePlayer(data.player, data.id, rawGSI, this.players, this.current));
    const gsi = {
      provider: rawGSI.provider,
      map: parseMap(rawGSI.map, this.teams),
      players,
      player: players.find((player) => player.hero && player.hero.selected_unit) || null,
      buildings: rawBuildings.map((entry) => parseBuilding(entry.id, entry.building)),
      roshan: rawGSI.roshan ? rawGSI.roshan : null,
      neutral_items: parseNeutralItems(rawGSI.map.game_time, rawGSI.neutralitems, this.last?.neutral_items || void 0) || null,
      events: rawGSI.events ? rawGSI.events : null,
      outposts: parseOutposts(rawGSI.minimap),
      draft: {
        activeteam: rawGSI.draft.activeteam,
        pick: rawGSI.draft.pick,
        activeteam_time_remaining: rawGSI.draft.activeteam_time_remaining,
        radiant: rawGSI.draft.team2 && "home_team" in rawGSI.draft.team2 && rawGSI.draft.radiant_bonus_time !== void 0 ? {
          home_team: rawGSI.draft.team2.home_team,
          bonus_time: rawGSI.draft.radiant_bonus_time,
          picks: parseDraft(rawGSI.draft.team2)
        } : void 0,
        dire: rawGSI.draft.team3 && "home_team" in rawGSI.draft.team3 && rawGSI.draft.dire_bonus_time !== void 0 ? {
          home_team: rawGSI.draft.team3.home_team,
          bonus_time: rawGSI.draft.dire_bonus_time,
          picks: parseDraft(rawGSI.draft.team3)
        } : void 0
      }
    };
    this.current = gsi;
    if (this.last) {
      for (const player of gsi.players) {
        const previousPlayer = this.last.players.find((lastPlayer) => lastPlayer.steamid === player.steamid);
        if (!previousPlayer) continue;
        const newKills = player.kill_list.filter((kill) => {
          const previousKill = previousPlayer.kill_list.find((oldKill) => oldKill.victimid === kill.victimid);
          if (!previousKill) return true;
          return previousKill.amount !== kill.amount;
        });
        for (const killEntry of newKills) {
          const victim = gsi.players.find((player2) => player2.id === killEntry.victimid);
          if (!victim) continue;
          const kill = {
            victim,
            killer: player
          };
          this.emit("kill", kill);
        }
      }
      if (gsi.map.win_team !== "none" && this.last.map.win_team === "none") {
        const winTeam = gsi.map.win_team.toLowerCase();
        if (winTeam.includes("dire")) {
          this.emit("matchEnd", {
            faction: "dire",
            teamId: gsi.map.dire.id,
            name: gsi.map.dire.name
          });
        } else {
          this.emit("matchEnd", {
            faction: "radiant",
            teamId: gsi.map.radiant.id,
            name: gsi.map.radiant.name
          });
        }
      }
    }
    this.last = gsi;
    this.emit("data", gsi);
    return gsi;
  };
};
export {
  DOTA2GSI,
  getItem
};
