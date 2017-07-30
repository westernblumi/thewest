 // ==UserScript==
// @name The West Fortbattle Tool
// @namespace The West Fortbattle Tool
// @author westernblumi
// @description Fort battle tools for The West!
// @include https://*.the-west.*/game.php*
// @version	0.52
// @grant none
// ==/UserScript==
// translation: westernblumi(German & English), pepe100(Spanish)
(function(fn) {
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = '(' + fn.toString() + ')();';
    document.body.appendChild(script);
    document.body.removeChild(script);
})(function() {
    TWFBTstart = {
        version: '0.52',
        testatt: '',
        langs: {
            en: {
                language: 'English',
                aim: 'Aiming',
                adventurer: 'Adventurer',
                attack: 'Attack',
                bonusByClothes: 'Bonus by Clothes',
                bonusBySets: 'Bonus by Sets',
                bonusBySkill: 'Bonus by skill',
                bonusDefault: 'Defaultbonus',
                bonusTotal: 'Total',
                calcBonus: 'Calculate fort battle bonus',
                calculator: 'Calculator',
                clear: 'Clear Window',
                clothes: 'Clothes',
                damage: 'Damage bonus',
                defense: 'Defense',
                dodge: 'Dodging',
                duelist: 'Duelist',
                endurance: 'Stamina',
                hide: 'Hiding',
                leadership: 'Leadership',
                lifepoints: 'Lifepoints',
                newFormula: 'new formula',
                oldFormula: 'old formula',
                pa: 'Premium (soldier and worker fort battle bonus)',
                pitfall: 'Setting traps',
                resistance: 'Resistance',
                scriptName: 'The West Fortbattle Tool',
                soldier: 'Soldier',
                worker: 'Worker',
                name: 'Name',
                author: 'Author: </b>',
                version: 'Version: </b>',
                update: 'Update',
                updateAvailable: 'A new version of the script is available',
            },
            de: {
                language: 'German (Deutsch)',
                aim: 'Zielen',
                adventurer: 'Abenteurer',
                attack: 'Angriff',
                bonusByClothes: 'Bonus durch Bekleidung',
                bonusBySets: 'Bonus durch Sets',
                bonusBySkill: 'Bonus durch Skillung',
                bonusDefault: 'Grundbonus',
                bonusTotal: 'Gesamt',
                calcBonus: 'Berechne Fortkampf Bonus',
                calculator: 'Rechner',
                clear: 'Lösche Berechnungen',
                clothes: 'Klamotten',
                damage: 'Schadensbonus',
                defense: 'Verteidigung',
                dodge: 'Ausweichen',
                duelist: 'Duellant',
                endurance: 'Ausdauer',
                hide: 'Verstecken',
                leadership: 'Leiten',
                lifepoints: 'Lebenspunkte',
                newFormula: 'neue Formel',
                oldFormula: 'alte Formel',
                pa: 'Premium (Soldaten und Arbeiterbonus)',
                pitfall: 'Fallen stellen',
                resistance: 'Widerstand',
                scriptName: 'The West FK Tool',
                soldier: 'Soldat',
                worker: 'Arbeiter',
                name: 'Name',
                author: 'Autor: </b>',
                version: 'Version: </b>',
                update: 'Update',
                updateAvailable: 'Für das Script ist eine neue Version erhältlich',

                what: 'Was',
                when: 'Wann',
                where: 'Wo',
                atter: 'Angreifer',
                deffer: 'Verteidiger',
                leading: 'Leitung',
                recruting: 'Musterung',
                lineup: 'Aufstellung',
                chat: 'Chat',
                preview: 'Vorschau',
                salutationStart: 'Anrede',
                salutationEnd: 'Grußformel',

                team: 'Team',
                player: 'Spieler',
                playerCount: 'Anzahl Spieler',
                survivingPlayerCount: 'überlebende Spieler',
                offlinePlayerCount: 'offline Spieler',
                adventurers: 'Abenteurer',
                duelists: 'Duellanten',
                greenhorns: 'Grennhorns',
                soldiers: 'Soldaten',
                workers: 'Arbeiter',
                average_charlevel: 'durchschnitts Level',
                maxhp: 'maximale Lebenspunkte',
                starthp: 'Lebenspunkte am Anfang',
                finishedhp: 'Lebenspunkte am Ende',
                totalcauseddamage: 'Schaden',
                hitcount: 'Treffer',
                misscount: 'Fehlschüsse',
                dodgecount: 'Ausweicher',
                takenhits: 'eingesteckte Treffer',
                crithits: 'Kritische Treffer',
                diedwhen: 'durchschnittliche Lebensdauer',
                onlinecount: 'durchschnittliche Onlinerunden',
                takendamage: 'eingesteckter Schaden',
                charlevel: 'durchschnittliches Level',
                criticalHits: 'Kritische Treffer',
            },
            es: {
                language: 'Español',
                aim: 'Apuntar',
                adventurer: 'Adventurero',
                attack: 'Ataque',
                bonusByClothes: 'Bono por Ropas',
                bonusBySets: 'Bono por Conjuntos',
                bonusBySkill: 'Bono por Habilidad',
                bonusDefault: 'Bono por Defecto',
                bonusTotal: 'Total',
                calcBonus: 'Calcular Bono de Batalla',
                calculator: 'Calculadora',
                clear: 'Limpiar Ventana',
                clothes: 'Ropa',
                damage: 'Bono de Daño',
                defense: 'Defensa',
                dodge: 'Eludir',
                duelist: 'Duelista',
                endurance: 'Condición',
                hide: 'Esconder',
                leadership: 'Liderazgo',
                lifepoints: 'Puntos de Vida',
                newFormula: 'fórmula nueva',
                oldFormula: 'fórmula antigua',
                pa: 'Premium (bonus Soldado/Trabajador)',
                pitfall: 'Poner trampas',
                resistance: 'Resistencia',
                scriptName: 'The West Fortbattle Tool',
                soldier: 'Soldado',
                worker: 'Trabajador',
                name: 'Nombre',
                author: 'Autor: ',
                version: 'Versión: ',
                update: 'actualizar',
                updateAvailable: 'Una nueva versión del script está disponible',
            },
        }
    };
    TWFBT = {
        name: 'The West Fortbattle Tool',
        author: 'westernblumi',
        minGame: '2.4',
        maxGame: Game.version.toString(),
        website: 'https://greasyfork.org/de/scripts/22880-the-west-fortbattle-tool',
        updateUrl: 'https://raw.githack.com/westernblumi/thewest/master/skriptUpdater.js',
        side: 'attack',
        pa: false,
        characterClass: Character.charClass,
        formula: 'newFormula',
        Images: {
            settings: 'data:image/jpeg;base64,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',
        },
        updateLang: function() {
            var lg = TWFBTstart.langs;
            TWFBT.lang = lg[Game.locale.substr(0, 2)] ? Game.locale.substr(0, 2) : 'en';
            TWFBTlang = lg[TWFBT.lang];
        },
    };
    TWFBT.updateLang();
    TWFBT.Skript = {
        init: function() {
            TWFBT['Calculator'].init();
            TWFBT['Generator'].init();
            TWFBT['Reminder'].init();
            TWFBT['Statistics'].init();

            var menuContainer = $('<div id="TWFBT-menu" class="menulink" onclick="TWFBT.GUI.openTWFBTWindow();" title="' + TWFBTlang.scriptName + '" />').css('background-image', 'url(' + TWFBT.Images.settings + ')').css('background-position', '0px 0px').mouseenter(function() {
                $(this).css('background-position', '-25px 0px');
            }).mouseleave(function() {
                $(this).css('background-position', '0px 0px');
            });
            $('#ui_menubar').append($('<div class="ui_menucontainer" />').append(menuContainer).append('<div class="menucontainer_bottom" />'));
        },
    };
    TWFBT.GUI = {
        openTWFBTWindow: function() {
            TWFBT.GUI.open();
            TWFBT.GUI.calcSkill();
        },
        open: function() {
            TWFBT.GUI.window = wman.open('TWFBT', TWFBTlang.scriptName, 'noreload').setMiniTitle(TWFBTlang.scriptName).setMaxSize(1268, 838);
            TWFBT.GUI.window.addTab(TWFBTlang.calculator, 'TWFBTCalcSkill', TWFBT.GUI.calcSkill);
            TWFBT.GUI.window.addTab('Generator', 'TWFBTTester', TWFBT.GUI.tester);
        },
        getDefault: function(tab) {
            TWFBT.GUI.window.setResizeable(false).setSize(748, 471).clearContentPane().removeClass('nocloseall').setTitle('TWFBTCalcSkill');
            TWFBT.GUI.window.dontCloseAll = false;
            $(TWFBT.GUI.window.getContentPane()).css('margin-top', '0px');
            var wnd = TWFBT.GUI.window.getMainDiv();
            $('.textart_title', wnd).css('display', '');
            TWFBT.GUI.window.activateTab(tab);
        },
        tester: function() {
            TWFBT.GUI.getDefault('TWFBTTester');
            TWFBT.GUI.window.setTitle(TWFBTlang.scriptName);

            var featScroll = new west.gui.Scrollpane();

            $(featScroll.getMainDiv()).css({
                'margin-top': '10px'
            });


            var clearButton = new west.gui.Button(TWFBTlang.clear, function() {
                $('.preview').replaceWith('<div style="float: left;"><div style="padding: 7px;"><b>' + TWFBTlang.preview + ':</b></div><div class="preview" style="width: 300px; height: 240; padding: 5px; margin-left: 16px;"></div></div');
            });


            var when = new west.gui.Textfield('TWFBT-when').setSize(18);
            var where = new west.gui.Textfield('TWFBT-where').setSize(18);
            var what = new west.gui.Textfield('TWFBT-what').setSize(18);
            var leading = new west.gui.Textfield('TWFBT-leading').setSize(18);
            var recruting = new west.gui.Textfield('TWFBT-recruting').setSize(18);
            var lineup = new west.gui.Textarea(null, null).setId('TWFBT-lineup').setHeight(190).setWidth(300);
            var chat = new west.gui.Textfield('TWFBT-chat').setSize(18);

            var atter = new west.gui.Textfield('TWFBT-atter').setSize(18);
            var deffer = new west.gui.Textfield('TWFBT-deffer').setSize(18);

            var salutationStart = new west.gui.Textfield('TWFBT-salutationStart').setSize(18);
            var salutationEnd = new west.gui.Textfield('TWFBT-salutationEnd').setSize(18);

            where.setValue(TWFBT.Generator.values.name);
            when.setValue(TWFBT.Generator.values.fortBattleStart);
            what.setValue(TWFBT.Generator.values.typename);

            var calcButton = new west.gui.Button(TWFBTlang.calcBonus, function() {
                TWFBT.Generator.generate();
            });
            var result = new west.gui.Textfield('test10').setLabel('result').setSize(70);
            featScroll.appendContent('<div class="label" style="float: left; padding-left: 5px; padding-right: 5px;">' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.salutationStart + '</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.what + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.when + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.where + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.atter + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.deffer + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.leading + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.recruting + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.lineup + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.chat + ':</p>' +
                '<p style="margin-top: 8px; height: 22px;">' + TWFBTlang.salutationEnd + ':</p>' +
                '</div>');
            /*featScroll.appendContent('
            + '<p>' + what.getMainDiv() +'</p>'
            + '<p>' + when.getMainDiv() +'</p>'
            + '<p>' + where.getMainDiv() +'</p>'
            + '<p>' + atter.getMainDiv() +'</p>'
            + '<p>' + deffer.getMainDiv() +'</p>'
            + '<p>' + leading.getMainDiv() +'</p>'
            + '<p>' + recruting.getMainDiv() +'</p>'
            + '<p>' + lineup.getMainDiv() +'</p>'
            + '<p>' + chat.getMainDiv() +'</p>'
            + '</div>');*/
            featScroll.appendContent(salutationStart.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(what.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(when.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(where.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(atter.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(deffer.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(leading.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(recruting.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(lineup.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(chat.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(salutationEnd.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(calcButton.getMainDiv());
            featScroll.appendContent(clearButton.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(result.getMainDiv());
            featScroll.appendContent('<div style="float: left;"><div style="padding: 7px;"><b>' + TWFBTlang.preview + ':</b></div><div class="preview" style="width: 300px; height: 240; padding: 5px; margin-left: 16px;"></div></div');

            $(TWFBT.GUI.window.getContentPane()).append(featScroll.getMainDiv());

            var clearTable = function() {

            }
        },
        calcSkill: function() {

            TWFBT.GUI.getDefault('TWFBTCalcSkill');
            TWFBT.GUI.window.setTitle(TWFBTlang.scriptName);

            var featScroll = new west.gui.Scrollpane();

            $(featScroll.getMainDiv()).css({
                'margin-top': '10px'
            });

            var calcButton = new west.gui.Button(TWFBTlang.calcBonus, function() {
                TWFBT.Calculator.calcSkills();
            });
            var clearButton = new west.gui.Button(TWFBTlang.clear, function() {
                clearTable();
            });

            var paCheckbox = new west.gui.Checkbox().setLabel(TWFBTlang.pa).setSelected(Premium.hasBonus('character'));
            paCheckbox.setCallback(function() {
                TWFBT.pa = paCheckbox.isSelected();
            }.bind(this));

            var charClassBox = new west.gui.Combobox();
            charClassBox.addItem('adventurer', TWFBTlang.adventurer);
            charClassBox.addItem('duelist', TWFBTlang.duelist);
            charClassBox.addItem('worker', TWFBTlang.worker);
            charClassBox.addItem('soldier', TWFBTlang.soldier);
            charClassBox.select(Character.charClass);
            TWFBT.characterClass = Character.charClass;
            charClassBox.addListener(function(val) {
                TWFBT.characterClass = val;
            });

            var modeBox = new west.gui.Combobox();
            modeBox.addItem('attack', TWFBTlang.attack);
            modeBox.addItem('defense', TWFBTlang.defense);
            modeBox.addListener(function(val) {
                TWFBT.side = val;
            });

            featScroll.appendContent(modeBox.getMainDiv());
            featScroll.appendContent(' ');
            featScroll.appendContent(paCheckbox.getMainDiv());
            featScroll.appendContent(' ');
            featScroll.appendContent(charClassBox.getMainDiv());
            featScroll.appendContent('<br>');
            featScroll.appendContent(calcButton.getMainDiv());
            featScroll.appendContent(clearButton.getMainDiv());
            featScroll.appendContent('<table border="1" id="TWFBTCalculatorTable"></table>');
            $(TWFBT.GUI.window.getContentPane()).append(featScroll.getMainDiv());

            var clearTable = function() {
                $('#TWFBTCalculatorTable').empty();
            }
        },
    };

    TWFBT.Calculator = {

        init: function() {

            TWFBT.Calculator.values = {
                offense: 0,
                defense: 0,
                offense_skillwithbonus: 0,
                defense_skillwithbonus: 0,
                offense_defaultbonus: 25,
                defense_defaultbonus: 10,
                offense_fortbattlebonus: 0,
                defense_fortbattlebonus: 0,
                offense_setbonus: 0,
                defense_setbonus: 0,
                damage: 0,
                resistance: 0,
                lifepoints: 0,
                side_skill: 'endurance'
            };

            var update = function(set, stage) {

                var bonusResultArray = {
                    offense: 0,
                    defense: 0,
                    damage: 0,
                    resistance: 0
                };
                var bonuses = west.storage.ItemSetManager._setList[set].getMergedStages(stage);

                for (var i = 0; i < bonuses.length; i++) {
                    if (bonuses[i].key == 'level') {
                        if (bonuses[i].bonus.name == 'damage') {
                            bonusResultArray['damage'] += bonuses[i].bonus.value * Character.level;
                        } else {
                            bonusResultArray[bonuses[i].name] += bonuses[i].bonus.value * Character.level;
                        }
                    } else {
                        bonusResultArray[bonuses[i].name] += bonuses[i].value;
                    }
                }

                return [bonusResultArray['offense'], bonusResultArray['defense'], bonusResultArray['damage'], bonusResultArray['resistance']];
            }

            TWFBT.Calculator.calcSkills = function() {
                TWFBT.Calculator.values.offense = 0;
                TWFBT.Calculator.values.defense = 0;
                TWFBT.Calculator.values.offense_skillwithbonus = 0;
                TWFBT.Calculator.values.defense_skillwithbonus = 0;
                TWFBT.Calculator.values.offense_defaultbonus = 25;
                TWFBT.Calculator.values.defense_defaultbonus = 10;
                TWFBT.Calculator.values.offense_fortbattlebonus = 0;
                TWFBT.Calculator.values.defense_fortbattlebonus = 0;
                TWFBT.Calculator.values.offense_setbonus = 0;
                TWFBT.Calculator.values.defense_setbonus = 0;
                TWFBT.Calculator.values.damage = 0;
                TWFBT.Calculator.values.resistance = 0;
                TWFBT.Calculator.values.lifepoints = 0;

                TWFBT.Calculator.newValues = {
                    offense: 0,
                    defense: 0,
                    offense_skillwithbonus: 0,
                    defense_skillwithbonus: 0,
                    offense_defaultbonus: 25,
                    defense_defaultbonus: 10,
                    offense_fortbattlebonus: 0,
                    defense_fortbattlebonus: 0,
                    offense_setbonus: 0,
                    defense_setbonus: 0,
                    damage: 0,
                    resistance: 0,
                    lifepoints: 0,
                };



                var sets = {};


                var side_skill = getSideSkill(TWFBT.side);
                var soldierBonus = getSoldierBonus(TWFBT.pa, TWFBT.characterClass);

                //add skillbonus (with clothes)
                calcSkillWithBonus(side_skill, soldierBonus);


                //add defaultbonus
                TWFBT.Calculator.values.defense += TWFBT.Calculator.values.defense_defaultbonus;
                TWFBT.Calculator.values.offense += TWFBT.Calculator.values.offense_defaultbonus;



                for (item in Wear.wear) {
                    if (Wear.wear.hasOwnProperty(item)) {
                        var item_obj = Wear.wear[item].obj;
                        TWFBT.Calculator.values.defense_fortbattlebonus += item_obj.bonus.fortbattle.defense;
                        TWFBT.Calculator.values.defense_fortbattlebonus += item_obj.bonus.fortbattlesector.defense;
                        TWFBT.Calculator.values.offense_fortbattlebonus += item_obj.bonus.fortbattle.offense;
                        TWFBT.Calculator.values.offense_fortbattlebonus += item_obj.bonus.fortbattlesector.offense;
                        TWFBT.Calculator.values.damage += item_obj.bonus.fortbattlesector.damage;
                        TWFBT.Calculator.values.resistance += item_obj.bonus.fortbattle.resistance;

                        for (j = 0; j < item_obj.bonus.item.length; j++) {
                            switch (item_obj.bonus.item[j].name) {
                                case 'offense':
                                    TWFBT.Calculator.values.offense_fortbattlebonus += item_obj.bonus.item[j].value;
                                    break;
                                case 'defense':
                                    TWFBT.Calculator.values.defense_fortbattlebonus += item_obj.bonus.item[j].value;
                                    break;
                                case 'damage':
                                    TWFBT.Calculator.values.damage += item_obj.bonus.item[j].value;
                                    break;
                            }
                        }

                        if (item_obj.set != null) {
                            if (sets[item_obj.set] == undefined) {
                                sets[item_obj.set] = 1;
                            } else {
                                sets[item_obj.set] += 1;
                            }
                        }

                    }
                }
                /*var items = ['animal', 'belt', 'body', 'foot', 'head', 'left_arm', 'neck', 'pants', 'right_arm', 'yield'];
                for (i = 0; i < items.length; i++) {
                    try {
                        //Get fortbattle and fortbattlesector bonuses of the current equipment
                        var item_obj = ItemManager.get(Wear.get(items[i]).obj.item_id);
                        TWFBT.Calculator.values.defense_fortbattlebonus += item_obj.bonus.fortbattle.defense;
                        TWFBT.Calculator.values.defense_fortbattlebonus += item_obj.bonus.fortbattlesector.defense;
                        TWFBT.Calculator.values.offense_fortbattlebonus += item_obj.bonus.fortbattle.offense;
                        TWFBT.Calculator.values.offense_fortbattlebonus += item_obj.bonus.fortbattlesector.offense;
                        TWFBT.Calculator.values.damage += item_obj.bonus.fortbattlesector.damage;
                        TWFBT.Calculator.values.resistance += item_obj.bonus.fortbattle.resistance;

                        for (j = 0; j < item_obj.bonus.item.length; j++) {
                            try {
                                if (item_obj.bonus.item[j].name == 'offense') {
                                    TWFBT.Calculator.values.offense_fortbattlebonus += item_obj.bonus.item[j].value;
                                }
                            } catch (e) {}

                            try {
                                if (item_obj.bonus.item[j].name == 'defense') {
                                    TWFBT.Calculator.values.defense_fortbattlebonus += item_obj.bonus.item[j].value;
                                }
                            } catch (e) {}

                            try {
                                if (item_obj.bonus.item[j].type == 'damage') {
                                    TWFBT.Calculator.values.damage += item_obj.bonus.item[j].value;
                                }
                            } catch (e) {}
                        }

                        //Get set bonuses of the current equipment
                        var item_id = Wear.get(items[i]).obj.item_id;
                        var item_obj = ItemManager.get(item_id);
                        if (item_obj.set != null) {
                            if (sets[item_obj.set] == undefined) {
                                sets[item_obj.set] = 1;
                            } else {
                                sets[item_obj.set] += 1;
                            }
                        }
                    } catch (e) {}
                }*/
                TWFBT.Calculator.values.offense += TWFBT.Calculator.values.offense_fortbattlebonus;
                TWFBT.Calculator.values.defense += TWFBT.Calculator.values.defense_fortbattlebonus;

                TWFBT.Calculator.Test = sets;

                for (var set in sets) {
                    if (sets.hasOwnProperty(set)) {
                        var setbonusArray = [0, 0, 0, 0];
                        setbonusArray = update(set, sets[set]);
                        TWFBT.Calculator.values.offense_setbonus += setbonusArray[0];
                        TWFBT.Calculator.values.defense_setbonus += setbonusArray[1];
                        TWFBT.Calculator.values.damage += setbonusArray[2];
                        TWFBT.Calculator.values.resistance += setbonusArray[3];
                    }
                }

                TWFBT.Calculator.values.offense += TWFBT.Calculator.values.offense_setbonus;
                TWFBT.Calculator.values.defense += TWFBT.Calculator.values.defense_setbonus

                var workerBonus = getWorkerBonus(TWFBT.pa, TWFBT.characterClass);
                TWFBT.Calculator.values.offense *= workerBonus;
                TWFBT.Calculator.values.defense *= workerBonus;
                prettifyResults();

                TWFBT.Calculator.values.lifepoints = Character.maxHealth;
                window.setTimeout(function() {
                    showData(side_skill);
                }, 1000);

            }


            var getSideSkill = function(side) {
                if (side == 'attack') {
                    return 'hide';
                } else {
                    return 'pitfall';
                }
            }

            var calcSkillWithBonus = function(side_skill, soldierBonus) {
                TWFBT.Calculator.values.defense_skillwithbonus = Math.pow(CharacterSkills.getSkill(side_skill).getPointsWithBonus(), 0.6) +
                    Math.pow(CharacterSkills.getSkill('dodge').getPointsWithBonus(), 0.5) +
                    Math.pow(CharacterSkills.getSkill('leadership').getPointsWithBonus() * soldierBonus, 0.5);
                TWFBT.Calculator.values.defense += TWFBT.Calculator.values.defense_skillwithbonus;
                TWFBT.Calculator.values.offense_skillwithbonus = Math.pow(CharacterSkills.getSkill(side_skill).getPointsWithBonus(), 0.6) +
                    Math.pow(CharacterSkills.getSkill('aim').getPointsWithBonus(), 0.5) +
                    Math.pow(CharacterSkills.getSkill('leadership').getPointsWithBonus() * soldierBonus, 0.5);
                TWFBT.Calculator.values.offense += TWFBT.Calculator.values.offense_skillwithbonus;

            }

            var getSoldierBonus = function(pa, characterClass) {
                var soldierBonus = 1;
                if (pa && characterClass == 'soldier') {
                    soldierBonus = 1.5;
                } else if (characterClass == 'soldier') {
                    soldierBonus = 1.25;
                }
                return soldierBonus;
            }

            var getWorkerBonus = function(pa, characterClass) {
                var workerBonus = 1;
                if (pa && characterClass == 'worker') {
                    workerBonus = 1.4;
                } else if (characterClass == 'worker') {
                    workerBonus = 1.2;
                }
                return workerBonus;
            }

            var prettifyResults = function() {
                for (var value in TWFBT.Calculator.newValues) {
                    if (TWFBT.Calculator.newValues.hasOwnProperty(value)) {
                        TWFBT.Calculator.newValues[value] = Math.round(TWFBT.Calculator.newValues[value] * 100) / 100;
                    }
                }
                /*for each(var value in TWFBT.Calculator.newValues) {
                    value = Math.round(value * 100) / 100;
                }*/
                /*TWFBT.Calculator.values.offense_skillwithbonus = Math.round(TWFBT.Calculator.values.offense_skillwithbonus * 100) / 100;
                TWFBT.Calculator.values.defense_skillwithbonus = Math.round(TWFBT.Calculator.values.defense_skillwithbonus * 100) / 100;
                TWFBT.Calculator.values.offense_fortbattlebonus = Math.round(TWFBT.Calculator.values.offense_fortbattlebonus * 100) / 100;
                TWFBT.Calculator.values.defense_fortbattlebonus = Math.round(TWFBT.Calculator.values.defense_fortbattlebonus * 100) / 100;
                TWFBT.Calculator.values.offense_setbonus = Math.round(TWFBT.Calculator.values.offense_setbonus * 100) / 100;
                TWFBT.Calculator.values.defense_setbonus = Math.round(TWFBT.Calculator.values.defense_setbonus * 100) / 100;

                TWFBT.Calculator.values.offense = Math.round(TWFBT.Calculator.values.offense * 100) / 100;
                TWFBT.Calculator.values.defense = Math.round(TWFBT.Calculator.values.defense * 100) / 100;

                TWFBT.Calculator.values.damage = Math.ceil(Math.round(TWFBT.Calculator.values.damage * 10) / 10);*/
            }

            var showData = function(side_skill) {

                var content = $('<tr></tr>');
                content.append('<th colspan="9">' + TWFBTlang[TWFBT.side] + '</th>');
                $('#TWFBTCalculatorTable').append(content);

                var content = $('<tr><th>' +
                    TWFBTlang.leadership + '</th><th>' +
                    TWFBTlang[side_skill] + '</th><th>' +
                    TWFBTlang.aim + '</th><th>' +
                    TWFBTlang.dodge + '</th><th>' +
                    TWFBTlang.bonusBySkill + '</th><th>' +
                    TWFBTlang.bonusByClothes + '</th><th>' +
                    TWFBTlang.bonusBySets + '</th><th>' +
                    TWFBTlang.bonusDefault + '</th><th>' +
                    TWFBTlang.bonusTotal + '</th></tr>');
                $('#TWFBTCalculatorTable').append(content);



                content = $('<tr></tr>');
                content.append('<td align="center">' + CharacterSkills.getSkill('leadership').getPointsWithBonus() + '</td>');
                content.append('<td align="center">' + CharacterSkills.getSkill(side_skill).getPointsWithBonus() + '</td>');
                content.append('<td align="center">' + CharacterSkills.getSkill('aim').getPointsWithBonus() + '</td>');
                content.append('<td align="center">' + CharacterSkills.getSkill('dodge').getPointsWithBonus() + '</td>');
                content.append('<td align="center">' + TWFBT.Calculator.values.offense_skillwithbonus + '<br>' + TWFBT.Calculator.values.defense_skillwithbonus + '</td>');
                content.append('<td align="center">' + TWFBT.Calculator.values.offense_fortbattlebonus + '<br>' + TWFBT.Calculator.values.defense_fortbattlebonus + '</td>');
                content.append('<td align="center">' + TWFBT.Calculator.values.offense_setbonus + '<br>' + TWFBT.Calculator.values.defense_setbonus + '</td>');
                content.append('<td align="center">' + TWFBT.Calculator.values.offense_defaultbonus + '<br>' + TWFBT.Calculator.values.defense_defaultbonus + '</td>');
                content.append('<td align="center">' + TWFBT.Calculator.values.offense + '<br>' + TWFBT.Calculator.values.defense + '</td>');
                $('#TWFBTCalculatorTable').append(content);

                content = $('<tr></tr>');
                content.append('<th colspan="2">' + TWFBTlang.damage + '</th><td align="left">' + TWFBT.Calculator.values.damage + '</td>' +
                    '<th colspan="2">' + TWFBTlang.resistance + '</th><td align="left">' + TWFBT.Calculator.values.resistance + '</td>' +
                    '<th colspan="2">' + TWFBTlang.lifepoints + '</th><td align="left">' + TWFBT.Calculator.values.lifepoints + '</td>');
                $('#TWFBTCalculatorTable').append(content);


                content = $('<tr></tr>');
                var items = ['animal', 'belt', 'body', 'foot', 'head', 'left_arm', 'neck', 'pants', 'right_arm', 'yield'];
                var item_string = '';
                //MessageSuccess(items[0]+' '+items[1]+' '+items[2]+' '+items[3]+' '+items[4]+' ').show();
                /*for(i=0 ; i<items.length; i++){
                	try {
                		item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[i]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[i]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[i]).obj.item_id).image + '"></a>';
                	} catch (e) {
                	}
                }*/
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[0]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[0]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[0]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[1]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[1]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[1]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[2]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[2]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[2]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[3]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[3]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[3]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[4]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[4]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[4]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[5]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[5]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[5]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[6]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[6]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[6]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[7]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[7]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[7]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[8]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[8]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[8]).obj.item_id).image + '"></a>';
                } catch (e) {}
                try {
                    item_string += '<a class="itemlink hasMousePopup" href="javascript:void(0)" title="' + escapeHTML(new ItemPopup(ItemManager.get(Wear.get(items[9]).obj.item_id)).getXHTML()) + '">' + ItemManager.get(Wear.get(items[9]).obj.item_id).name + ' <img width="15" height="15" src="' + ItemManager.get(Wear.get(items[9]).obj.item_id).image + '"></a>';
                } catch (e) {}
                content.append('<th>' + TWFBTlang.clothes + '</th><td align="left" colspan="8">' + item_string + '</td>');
                $('#TWFBTCalculatorTable').append(content);

                /*var buttontest = new west.gui.Button('Wieder anziehen', function () {

                });*/
                //content.append('<td colspan="2">' + buttontest.getMainDiv() +'</td>');
                //content.append('<td colspan="2"><a href="clearTable()">Wieder anziehen</a> +</td>');

                /*
                //calc new worker bonus
                var workerBonus = 1;
                if(TWFBT.pa && TWFBT.characterClass == 'worker'){
                	workerBonus = 1.4;
                } else if (TWFBT.characterClass == 'worker') {
                	workerBonus = 1.2;
                }

                var attplus = TWFBT.Calculator.values.offense+TWFBT.Calculator.values.offense_skillwithbonus*(workerBonus-1);
                var deffplus = TWFBT.Calculator.values.defense+TWFBT.Calculator.values.defense_skillwithbonus*(workerBonus-1);
                var string = '';
                string = string.concat('Total Att: ' + TWFBT.Calculator.values.offense*workerBonus + '\n');
                string = string.concat('Total Deff: ' + TWFBT.Calculator.values.defense*workerBonus + '\n')
                //string = string.concat('Skill Att: ' + TWFBT.Calculator.values.offense_skillwithbonus*workerBonus + '\n');
                //string = string.concat('Skill Deff: ' + TWFBT.Calculator.values.defense_skillwithbonus*workerBonus + '\n');
                string = string.concat('Skill Att: ' + attplus + '\n');
                string = string.concat('Skill Deff: ' + deffplus + '\n')
                alert(string);*/


            }

            var escapeHTML = function(unsafe_str) {
                return unsafe_str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/\'/g, '&#39;');
            }
        }
    };

    TWFBT.Generator = {

        init: function() {

            TWFBT.Generator.values = {
                xPosition: '',
                yPosition: '',
                attacker: '',
                defender: '',
                name: '',
                typename: '',
                fortBattleStart: ''
            };

            TWFBT.Generator.generate = function() {
                var newdiv = '<div class="preview" style="width: 300px; height: 240; border-left: 6px solid rgb(82, 63, 48); padding: 5px; margin-left: 10px;">';

                var item = $('#TWFBT-salutationStart').val();
                if (item != '') {
                    newdiv += item + '<br><br>';
                }
                item = $('#TWFBT-what').val();
                if (item != '') {
                    newdiv += '<b>' + TWFBTlang.what + ': </b>' + item + '<br>';
                }
                item = $('#TWFBT-when').val();
                if (item != '') {
                    newdiv += '<b>' + TWFBTlang.when + ': </b>' + item + '<br>';
                }
                item = $('#TWFBT-where').val();
                if (item != '') {
                    newdiv += '<b>' + TWFBTlang.where + ': </b>' + item + '<br>';
                }
                item = $('#TWFBT-atter').val();
                if (item != '') {
                    newdiv += '<b>' + TWFBTlang.atter + ': </b>' + item + '<br>';
                }
                item = $('#TWFBT-deffer').val();
                if (item != '') {
                    newdiv += '<b>' + TWFBTlang.deffer + ': </b>' + item + '<br>';
                }
                item = $('#TWFBT-leading').val();
                if (item != '') {
                    newdiv += '<b>' + TWFBTlang.leading + ': </b>' + item + '<br>';
                }
                item = $('#TWFBT-recruting').val();
                if (item != '') {
                    newdiv += '<b>' + TWFBTlang.recruting + ': </b>' + item + '<br>';
                }
                item = $('#TWFBT-chat').val();
                if (item != '') {
                    newdiv += '<b>' + TWFBTlang.chat + ': </b><a class="external_link" href="http://webchat.quakenet.org/?channels=' + item + '">http://webchat.quakenet.org/?channels=' + item + '<a/> <i>Channel:</i> ' + item + '<br>';
                }
                item = $('#TWFBT-salutationEnd').val();
                if (item != '') {
                    newdiv += '<br>' + item + '<br>';
                }
                newdiv += '</div>';
                $('.preview').replaceWith(newdiv);
            }

            TWFBT.Generator.setValues = function(xPosition, yPosition) {
                TWFBT.Generator.values.xPosition = xPosition;
                TWFBT.Generator.values.yPosition = yPosition;

                Ajax.remoteCallMode('fort', 'display', {
                    x: xPosition,
                    y: yPosition
                }, function(response) {
                    if (response.error) {
                        return MessageError(response.msg).show();
                    } else {
                        TWFBT.Generator.values.name = response.data.name;
                        TWFBT.Generator.values.typename = response.data.typename;
                        TWFBT.Generator.values.fortBattleStart = response.data.battle.fortBattleStart;
                        TWFBT.GUI.openTWFBTWindow();
                        TWFBT.GUI.tester();
                    }
                });
            }

            /*TWFBT.Generator.generate = function () {
            	window.prompt("Copy to clipboard: Ctrl+C, Enter", "ggggggggggggggggggggggggggghhhhhhhhhhhhhhhhh");
            }*/

            FortBattleWindow.backup_setPlayerStatus = FortBattleWindow.setPlayerStatus;
            FortBattleWindow.setPlayerStatus = function() {
                FortBattleWindow.backup_setPlayerStatus.apply(this, arguments);

                if (!($(".TWFBT_linker").length)) {
                    //$('.progress_status').prepend('<span class="TWFBT_linker"><a href="#" onclick="TWFBT.Generator.setValues('+data[1]+','+data[2]+');"><img src="images/icons/sword.png"  style="margin-left:110px;" class="fortOverviewIconScroll hasMousePopup"></a></span>');
                }
            };


            //Add button to all current fights (FortOverview)
            FortOverviewWindow.CurrentBattles.backup_init = FortOverviewWindow.CurrentBattles.init;
            FortOverviewWindow.CurrentBattles.init = function() {
                FortOverviewWindow.CurrentBattles.backup_init.call(this, arguments);
                Ajax.remoteCallMode('fort_overview', '', {
                    offset: '0'
                }, function(json) {
                    if (json.error) {
                        return MessageError(json.msg).show();
                    } else {
                        for (var i = 0; i < json.js.length; i++) {
                            var data = json.js[i];
                            if (data[3] == true) {
                                if (!($(".TWFBT_rm").length)) {
                                    $('.join_button').after('<span class="TWFBT_rm"><a href="#" onclick="TWFBT.Generator.setValues(' + data[1] + ',' + data[2] + ');"><img src="images/icons/sword.png"  style="margin-left:110px;" class="fortOverviewIconScroll hasMousePopup"></a></span>');
                                }

                            }
                        }
                    }
                });
            };
        }
    };

    TWFBT.Reminder = {

        init: function() {

            TWFBT.Reminder.values = {

            };


            var remind = function() {

                /*Ajax.remoteCall('fort_overview','',{
                	offset: '0'},function(response) {
                if (response.error){
                return MessageError(response.msg).show();
                	} else {

                	for(var i=0; i<response.js.length;i++){
                	if(response.js[i][3]){
                		var stadtname = response.js[i][5];
                		var alli_id = Character.homeTown.alliance_id;
                		Ajax.remoteCallMode('alliance','get_data',{
                		alliance_id: alli_id
                		},function(json){
                						for (x=0;x<json.data.towns.length;x++){
                							if (json.data.towns[x].name == stadtname){
                							MessageSuccess('Angriff aus meiner Bündnisstadt ' + stadtname).show();
                							}
                						}
                		});

                	/*var name = response.js[i][4];
                	Ajax.remoteCallMode('ranking','get_data',{
                		rank:NaN,
                		search:name,
                		tab:'experience'},function(json){
                						for (x=0;x<json.ranking.length;x++){
                							if (json.ranking[x].name == name){
                							MessageSuccess(name + ' aus ' + 'response.js[i][5]').show();
                									EventHandler.signal("ready.ok");
                							}
                						}
                		});

                	EventHandler.listen("ready.ok", function() {
                			showData();
                		});
                	}
                	}
                }
                });*/

                /*var updateMessage = new west.gui.Dialog('Test', west.gui.Dialog.SYS_WARNING).addButton(TWFBTlang.update, function () {
                	updateMessage.hide();
                	location.href = TWFBT.website + '/code.user.js';
                }).addButton('cancel').show();*/
            }



            window.setTimeout(function() {
                remind();
            }, 5000);
        }
    };

    TWFBT.Statistics = {

        openStatsGUIOpen: function() {
            TWFBT.Statistics.openStatsGUI();
            TWFBT.Statistics.showStats();
        },

        openStatsGUI: function() {
            TWFBT.Statistics.window = wman.open('TWFBT_2', TWFBTlang.scriptName, 'noreload').setMiniTitle(TWFBTlang.scriptName).setMaxSize(1268, 838);
            TWFBT.Statistics.window.addTab(TWFBTlang.team, 'TWFBTTesterTab1', TWFBT.Statistics.showStats);
            TWFBT.Statistics.window.addTab(TWFBTlang.player, 'TWFBTTesterTab2', TWFBT.Statistics.showStats2);
            TWFBT.Statistics.window.addTab(TWFBTlang.criticalHits, 'TWFBTTesterTab3', TWFBT.Statistics.showCriticalHits);
        },
        getDefault: function(tab) {
            TWFBT.Statistics.window.setResizeable(false).setSize(748, 471).clearContentPane().removeClass('nocloseall').setTitle('TWFBTCalcSkill');
            TWFBT.Statistics.window.dontCloseAll = false;
            $(TWFBT.Statistics.window.getContentPane()).css('margin-top', '0px');
            var wnd = TWFBT.Statistics.window.getMainDiv();
            $('.textart_title', wnd).css('display', '');
            TWFBT.Statistics.window.activateTab(tab);
        },
        showStats2: function() {
            TWFBT.Statistics.getDefault('TWFBTTesterTab2');
            TWFBT.Statistics.window.setTitle(TWFBTlang.scriptName);
            var featScroll = new west.gui.Scrollpane();

            $(featScroll.getMainDiv()).css({
                'margin-top': '5px'
            });
            featScroll.appendContent('<br>');

            featScroll.appendContent(getAverage('charlevel'));
            featScroll.appendContent(getAverage('diedwhen'));
            featScroll.appendContent(getAverage('onlinecount'));
            featScroll.appendContent(getAverage('totalcauseddamage'));
            featScroll.appendContent(getAverage('takendamage'));
            featScroll.appendContent(getAverage('hitcount'));
            featScroll.appendContent(getAverage('dodgecount'));
            featScroll.appendContent(getAverage('maxhp'));
            featScroll.appendContent(getAverage('starthp'));
            featScroll.appendContent(getAverage('finishedhp'));
            featScroll.appendContent('<br><br>');
            $(TWFBT.Statistics.window.getContentPane()).append(featScroll.getMainDiv());
        },
        showStats: function() {
            TWFBT.Statistics.getDefault('TWFBTTesterTab1');
            TWFBT.Statistics.window.setTitle(TWFBTlang.scriptName);
            var featScroll = new west.gui.Scrollpane();

            $(featScroll.getMainDiv()).css({
                'margin-top': '5px'
            });



            featScroll.appendContent('<br>');

            featScroll.appendContent(getPlayerCount());
            featScroll.appendContent(getSurvivingPlayer());
            //featScroll.appendContent(getStats('offlinePlayerCount'));
            featScroll.appendContent(getCharClass('adventurers'));
            featScroll.appendContent(getCharClass('duelists'));
            featScroll.appendContent(getCharClass('greenhorns'));
            featScroll.appendContent(getCharClass('soldiers'));
            featScroll.appendContent(getCharClass('workers'));

            featScroll.appendContent(getStats('maxhp'));
            featScroll.appendContent(getStats('starthp'));
            featScroll.appendContent(getStats('finishedhp'));

            featScroll.appendContent(getStats('totalcauseddamage'));
            featScroll.appendContent(getStats('hitcount'));
            featScroll.appendContent(getStats('misscount'));
            featScroll.appendContent(getStats('dodgecount'));
            featScroll.appendContent(getStats('takenhits'));
            featScroll.appendContent(getStats('crithits'));


            featScroll.appendContent('<br><br>');
            $(TWFBT.Statistics.window.getContentPane()).append(featScroll.getMainDiv());
        },



        init: function() {

            CemeteryWindow.backup_showStatUpdateTable = CemeteryWindow.showStatUpdateTable;
            CemeteryWindow.showStatUpdateTable = function(data) {
                CemeteryWindow.backup_showStatUpdateTable.call(this, data);

                var cemeteryFooter = jQuery("div.footer", CemeteryWindow.DOM);
                if (cemeteryFooter) {
                    var separator = document.createTextNode(" - ");
                    var exportLink = document.createElement("a");
                    var exportText = document.createTextNode('export');
                    exportLink.appendChild(exportText);
                    exportLink.href = "#";
                    exportLink.onclick = function() {
                        TWFBT.Statistics.openStatsGUIOpen();
                        return false;
                    };
                    cemeteryFooter.append(separator);
                    cemeteryFooter.append(exportLink);
                }
                TWFBT.Statistics.stats = data;
                //$('div.footer').after('- <a href="TWFBT.Statistics.stats();">Show</a>');
            };

            getStats = function(value) {
                var sumAttacker = 0;
                for (x = 0; x < TWFBT.Statistics.stats.attacker_count; x++) {
                    sumAttacker += TWFBT.Statistics.stats.result.attackerlist[x][value];
                }
                var sumDefender = 0;
                for (x = 0; x < TWFBT.Statistics.stats.defender_count; x++) {
                    sumDefender += TWFBT.Statistics.stats.result.defenderlist[x][value];
                }
                var sum = 0;
                if (sumAttacker > 0) {
                    sum += sumAttacker;
                }
                if (sumDefender > 0) {
                    sum += sumDefender;
                }
                var attackerPercent = (sumAttacker / sum) * 100;
                var defenderPercent = (sumDefender / sum) * 100;
                if (attackerPercent < 0) {
                    attackerPercent = 0;
                }
                if (defenderPercent < 0) {
                    defenderPercent = 0;
                }
                var content = getNormal(TWFBTlang[value], sumAttacker, sumDefender, attackerPercent, defenderPercent);
                return content;
            }

            getPlayerCount = function() {
                var sumAttacker = TWFBT.Statistics.stats.attacker_count;
                var sumDefender = TWFBT.Statistics.stats.defender_count;
                var sum = sumAttacker + sumDefender;
                var attackerPercent = (sumAttacker / sum) * 100;
                var defenderPercent = (sumDefender / sum) * 100;
                return getNormal(TWFBTlang.playerCount, sumAttacker, sumDefender, attackerPercent, defenderPercent);
            }

            getAverage = function(value) {
                var valueSumAttacker = 0;
                for (x = 0; x < TWFBT.Statistics.stats.attacker_count; x++) {
                    valueSumAttacker += TWFBT.Statistics.stats.result.attackerlist[x][value];
                }
                var valueSumDefender = 0;
                for (x = 0; x < TWFBT.Statistics.stats.defender_count; x++) {
                    valueSumDefender += TWFBT.Statistics.stats.result.defenderlist[x][value];
                }
                var averageAttacker = valueSumAttacker / TWFBT.Statistics.stats.attacker_count;
                var averageDefender = valueSumDefender / TWFBT.Statistics.stats.defender_count;
                var sum = averageAttacker + averageDefender;
                var attackerPercent = (averageAttacker / sum) * 100;
                var defenderPercent = (averageDefender / sum) * 100;
                return getNormal(TWFBTlang[value], averageAttacker, averageDefender, attackerPercent, defenderPercent);
            }

            getSurvivingPlayer = function() {
                var value = 'survivingPlayerCount';
                var valueSumAttacker = 0;
                for (x = 0; x < TWFBT.Statistics.stats.attacker_count; x++) {
                    if (TWFBT.Statistics.stats.result.attackerlist[x].diedwhen == 0) {
                        valueSumAttacker++;
                    }
                }
                var valueSumDefender = 0;
                for (x = 0; x < TWFBT.Statistics.stats.defender_count; x++) {
                    if (TWFBT.Statistics.stats.result.defenderlist[x].diedwhen == 0) {
                        valueSumDefender++;
                    }
                }
                var sum = valueSumAttacker + valueSumDefender;
                var attackerPercent = (valueSumAttacker / sum) * 100;
                var defenderPercent = (valueSumDefender / sum) * 100;
                var content = '';
                if (valueSumAttacker <= 0) {
                    content = '<div style="width: 99%;text-align: center;">' + TWFBTlang[value] + '</div><div style="width: 99%;border: 1px solid #888;border-radius: 5px;float: left;margin-bottom: 10px;" >' +
                        '<div style="float: left;width: 100%;height: 20px;border-radius: 0px 5px 5px 0px;background-color: rgb(64, 113, 255);text-align: center;"><span style="position: relative; display: inline-block;padding-top: 2px;">' + valueSumDefender + '</span></div>' +
                        '</div>';
                } else if (valueSumDefender <= 0) {
                    content = '<div style="width: 99%;text-align: center;">' + TWFBTlang[value] + '</div><div style="width: 99%;border: 1px solid #888;border-radius: 5px;float: left;margin-bottom: 10px;" >' +
                        '<div style="float: left;width: 100%;height: 20px;border-radius: 5px 0px 0px 5px;background-color: rgb(255, 41, 41);text-align: center;"><span style="position: relative; display: inline-block;padding-top: 2px;">' + valueSumAttacker + '</span></div>' +
                        '</div>';
                } else {
                    content = '<div style="width: 99%;text-align: center;">' + TWFBTlang[value] + '</div><div style="width: 99%;border: 1px solid #888;border-radius: 5px;float: left;margin-bottom: 10px;" >' +
                        '<div style="float: left;width: ' + Math.round(attackerPercent) + '%;height: 20px;border-radius: 5px 0px 0px 5px;background-color: rgb(255, 41, 41);text-align: center;"><span style="position: relative; display: inline-block;padding-top: 2px;">' + Math.round(valueSumAttacker) + '</span></div>' +
                        '<div style="float: left;width: ' + Math.round(defenderPercent) + '%;height: 20px;border-radius: 0px 5px 5px 0px;background-color: rgb(64, 113, 255);text-align: center;"><span style="position: relative; display: inline-block;padding-top: 2px;">' + Math.round(valueSumDefender) + '</span></div>' +
                        '</div>';

                }
                return content;
            }

            getCharClass = function(value) {

                var charclass = -1;
                switch (value) {
                    case 'adventurers':
                        charclass = 0;
                        break;
                    case 'duelists':
                        charclass = 1;
                        break;
                    case 'workers':
                        charclass = 2;
                        break;
                    case 'soldiers':
                        charclass = 3;
                        break;
                    case 'greenhorns':
                        charclass = 4;
                        break;
                }

                var valueSumAttacker = 0;
                for (x = 0; x < TWFBT.Statistics.stats.attacker_count; x++) {
                    if (TWFBT.Statistics.stats.result.attackerlist[x].charclass == charclass) {
                        valueSumAttacker++;
                    }
                }
                var valueSumDefender = 0;
                for (x = 0; x < TWFBT.Statistics.stats.defender_count; x++) {
                    if (TWFBT.Statistics.stats.result.defenderlist[x].charclass == charclass) {
                        valueSumDefender++;
                    }
                }
                var sum = valueSumAttacker + valueSumDefender;
                var attackerPercent = (valueSumAttacker / sum) * 100;
                var defenderPercent = (valueSumDefender / sum) * 100;
                var content = getNormal(value, valueSumAttacker, valueSumDefender, attackerPercent, defenderPercent);
                var content = getExperimantal(TWFBTlang[value], valueSumAttacker, valueSumDefender, TWFBT.Statistics.stats.attacker_count, TWFBT.Statistics.stats.defender_count);
                return content;
            }


            getNormal = function(name, valueAttacker, valueDefender, percentageAttacker, percentageDefender) {
                var content = '';
                if (!(valueAttacker <= 0 && valueDefender <= 0)) {
                    content = '<div style="width: 99%;text-align: center;">' + name + '</div>' +
                        '<div style="width: 99%;float: left;margin-bottom: 10px;" >' /*border: 1px solid #888;border-radius: 5px;*/ +
                        '<div style="float: left;width: ' + Math.round(percentageAttacker) + '%;height: 19px;border-radius: 5px 0px 0px 5px;background-color: rgb(255, 41, 41);"><span style="position: relative;left: 50%;display: inline-block;padding-top: 2px;">';
                    if (valueAttacker > 0) {
                        content += Math.round(valueAttacker);
                    }
                    content += '</span></div><div style="float: left;width: ' + Math.round(percentageDefender) + '%;height: 19px;border-radius: 0px 5px 5px 0px;background-color: rgb(64, 113, 255);"><span style="position: relative;left: 50%;display: inline-block;padding-top: 2px;">';
                    if (valueDefender > 0) {
                        content += Math.round(valueDefender);
                    }
                    content += '</span></div></div>';
                }
                return content;
            }

            getExperimantal = function(name, valueAttacker, valueDefender, valueAttackerTotal, valueDefenderTotal) {
                var percentageAttacker = (100 / valueAttackerTotal) * valueAttacker;
                var percentageDefender = (100 / valueDefenderTotal) * valueDefender;

                var content = '';
                if (!(valueAttacker <= 0 && valueDefender <= 0)) {
                    content = '<div style="width: 99%;text-align: center;">' + name + '</div>' +
                        '<div style="width: 99%;float: left;margin-bottom: 10px;" >' /*border: 1px solid #888;border-radius: 5px;*/ +
                        '<div style="float: left;width: 50%;"><div style="float: right;width: ' + Math.round(percentageAttacker) + '%;height: 19px;border-radius: 5px 0px 0px 5px;background-color: rgb(255, 41, 41);"><span style="position: relative;left: 50%;display: inline-block;padding-top: 2px;">';
                    if (valueAttacker > 0) {
                        content += valueAttacker;
                    }
                    content += '</span></div></div><div style="float: left;width: 50%;"><div style="float: left;width: ' + Math.round(percentageDefender) + '%;height: 19px;border-radius: 0px 5px 5px 0px;background-color: rgb(64, 113, 255);"><span style="position: relative;left: 50%;display: inline-block;padding-top: 2px;">';
                    if (valueDefender > 0) {
                        content += valueDefender;
                    }
                    content += '</span></div></div></div>';
                }
                return content;
            }

        }





    };

    TWFBT.Updater = function() {
        $.getScript(TWFBT.updateUrl, function() {
            if (scriptUpdate.TWFBT > TWFBTstart.version) {
                var updateMessage = new west.gui.Dialog(TWFBTlang.update + ': ' + TWFBT.name, '<span>' + TWFBTlang.updateAvailable + '<br><br><b>v' + scriptUpdate.TWFBT + ':</b><br>' + scriptUpdate.TWFBTNew + '</span>', west.gui.Dialog.SYS_WARNING).addButton(TWFBTlang.update, function() {
                    updateMessage.hide();
                    location.href = TWFBT.website + '/code.user.js';
                }).addButton('cancel').show();
            }
        });
    };
    setTimeout(TWFBT.Updater, 4000);


    TWFBT.Skript.init();
});
