Oskari.registerLocalization(
{
    "lang": "sv",
    "key": "Analyse",
    "value": {
        "title": "Analys <font color=red>(BETA)</font>",
        "flyouttitle": "Analys <font color=red>(BETA)</font>",
        "desc": "",
        "btnTooltip": "Analys",
        "NotLoggedView": {
            "text": "Endast inloggad användare kan göra analys",
            "signup": "Logga in",
            "signupUrl": "/web/sv/login",
            "register": "Registrera dig",
            "registerUrl": "/web/sv/login?p_p_id=58&p_p_lifecycle=1&p_p_state=maximized&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&saveLastPath=0&_58_struts_action=%2Flogin%2Fcreate_account"
        },
        "AnalyseView": {
            "title": "Analys",
            "content": {
                "label": "Kartlager",
                "drawToolsLabel": "Objekt verktyg",
                "tooltip": "Välj ett kartlager för en grund av analys. Du kan söka mera kartlager för sin analys eller plats för att visa sin utvald plats.",
                "drawToolsTooltip": "Man kan tilllägga tillfälliga objekt för sin analys aller klippa en befintlig objekt till flera objekt.",
                "features": {
                    "title": "Tillägg",
                    "buttons": {
                        "cancel": "Avbryt",
                        "finish": "Färdig"
                    },
                    "tooltips": {
                        "point": "Tillägg en tillfällig punkt",
                        "line": "Tillägg en tillfällig linje",
                        "area": "Tillägg ett tillfälligt område"
                    },
                    "modes": {
                        "area": "Tillfälligt område",
                        "line": "Tillfällig linje",
                        "point": "Tillfällig punkt"
                    }
                },
                "drawDialog": {
                    "point": {
                        "title": "Tillägg en punkt",
                        "add": "Tilllägg en punkt (eller flera punkter) genom att klicka kartan. Sluta ritning genom att klicka \"Färdig\". Nu kan du se en ny punkt på datalistan med text \"Tillfällig punkt X\" där X är ett ordningstal av punkten."
                    },
                    "line": {
                        "title": "Tillägg linje",
                        "add": "Tilllägg en linje (eller flera linjer) genom att klicka sina brytpunkter (bl.a. startpunkt) på kartan. Sluta ritning genom att klicka \"Färdig\". Nu kan du se en ny linje på datalistan med text \"Tillfällig linje X\" där X är ett ordningstal av linjen."
                    },
                    "area": {
                        "title": "Tillägg område",
                        "add": "Tilllägg ett område (eller flera område) genom att klicka sina hörnpunkter (bl.a. startpunkt) på kartan. Du kan också göra ett hål till området genom att hålla nere ALT-tangenten. Sluta ritning genom att klicka \"Färdig\". Nu kan du se en ny linje på datalistan med text \"Tillfällig linje X\" där X är ett ordningstal av linjen."
                    }
                },
                "drawFilter": {
                    "title": "Klippning",
                    "buttons": {
                        "cancel": "Avbryt",
                        "finish": "Färdig"
                    },
                    "tooltip": {
                        "point": "Klippa en linje",
                        "line": "Klippa en region med en linje",
                        "edit": "Klippa en region",
                        "remove": "Ta bort klippning"
                    },
                    "dialog": {
                        "modes": {
                            "point": {
                                "title": "Klippa en linje med punkter",
                                "message": "NOT TRANSLATED"
                            },
                            "line": {
                                "title": "Klippa en region med en linje.",
                                "message": "NOT TRANSLATED"
                            },
                            "edit": {
                                "title": "Klippa en region med en annan region.",
                                "message": "NOT TRANSLATED"
                            }
                        }
                    }
                },
                "selectionTools": {
                    "title": "NOT TRANSLATED",
                    "description": "NOT TRANSLATED",
                    "button": {
                        "empty": "Ta bort valda objekt"
                    }
                },
                "search": {
                    "title": "Sök en plats",
                    "resultLink": "Importera till en analys"
                }
            },
            "method": {
                "label": "Metod",
                "tooltip": "Väljä först material och efter det metods är till hands",
                "options": [
                    {
                        "id": "oskari_analyse_buffer",
                        "label": "Zon",
                        "classForMethod": "buffer",
                        "selected": true,
                        "tooltip": "Man kan skapa en zon omkring sina utvalda objekt. Man kan välja sig zonens storlek. Zonen kan användas senare i andra analys."
                    },
                    {
                        "id": "oskari_analyse_aggregate",
                        "label": "Statistiska mått",
                        "classForPreview": "aggregate",
                        "tooltip": "Man kan beräkna lägesmått och spridningsmåt för sina utvalda objekt."
                    },
                    {
                        "id": "oskari_analyse_union",
                        "label": "Union",
                        "classForPreview": "union",
                        "tooltip": "Man kan kombinera sin utvalda objekt till en ny objekt."
                    },
                    {
                        "id": "oskari_analyse_clip",
                        "label": "Leikkaus",
                        "classForPreview": "clip",
                        "tooltip": "Leikkaus-menetelmän avulla käyttäjä voi leikata kohteita toisen karttatason kohteilla. Analyysin lopputulokseen otetaan mukaan ne leikattavan tason kohteet, jotka sisältyvät leikkaavan tason kohteiden alueisiin."
                    },
                    {
                        "id": "oskari_analyse_intersect",
                        "label": "Klippning",
                        "classForPreview": "intersect",
                        "tooltip": "Man kan klippa objekt med objekt av ett annat kartlager. Resultaten innehåller bara objekt som ingår helt i område av objekt på klippande kartlagret."
                    },
                    {
                        "id": "oskari_analyse_layer_union",
                        "label": "Klippande objekt filtrering",
                        "classForPreview": "layer_union",
                        "tooltip": "Man kan välja sig objekt från ett  analyslager genom att klippa dem med ett annat analyslager."
                    },
                    {
                        "id": "oskari_analyse_areas_and_sectors",
                        "label": "Flera zoner",
                        "classForPreview": "areas_and_sectors",
                        "tooltip": "Man kan skapa flera zoner omkring utvalda objekt. Man kan välja sig själv zoners storlek och antal."
                    }, {
                        "id": "oskari_analyse_difference",
                        "label": "Muutoksen laskenta",
                        "classForPreview": "difference",
                        "tooltip": ""
                    },
                    {
                        "id": "oskari_analyse_spatial_join",
                        "label": "NOT TRANSLATED",
                        "classForPreview": "spatial_join",
                        "tooltip": ""
                    }
                ]
            },
            "aggregate": {
                "label": "Statistiska mått",
                "labelTooltip": "Tunnusluvut, jotka lasketaan kohteiden ominaisuustietojen perusteella.",
                "options": [
                    {
                        "id": "oskari_analyse_Count",
                        "label": "Antal",
                        "selected": true
                    },
                    {
                        "id": "oskari_analyse_Sum",
                        "label": "Summa"
                    },
                    {
                        "id": "oskari_analyse_Min",
                        "label": "Minsta värde"
                    },
                    {
                        "id": "oskari_analyse_Max",
                        "label": "Största värde"
                    },
                    {
                        "id": "oskari_analyse_Average",
                        "label": "Medelvärde"
                    },
                    {
                        "id": "oskari_analyse_StdDev",
                        "label": "Standardavvikelse"
                    },
                    {
                        "id": "oskari_analyse_Median",
                        "label": "Median"
                    },
                    {
                        "id": "oskari_analyse_NoDataCnt",
                        "label": "Skyddad objekt"
                    }
                ],
                "attribute": "Välj en attribut",
                "footer" : "Skyddad objekt är inte räknad"
            },
            "buffer_size": {
                "label": "Zon storlek",
                "labelTooltip": "Vyöhykkeen koko metreinä tai kilometreinä.",
                "tooltip": "Ge zon storlek."
            },
            "buffer_units": {
                "m": "Meter",
                "km": "Kilometer"
            },
            "analyse_name": {
                "label": "Analys namn",
                "labelTooltip": "Analyysiä kuvaava nimi",
                "tooltip": "Ge analys namn"
            },
            "settings": {
                "label": "Parameter",
                "tooltip": "Ge analys parameter. Parameter beror på utvald filter och metod."
            },
            "showFeatureData" : "Open feature data when analysis is finished",
            "showValuesCheckbox" : "Show calculated values without saving result",
            "intersect": {
                "target": "Klippandes analyslager",
                "targetLabelTooltip": "Analyysitaso, jonka kohteita leikataan leikkaavan tason kohteilla.",
                "label": "Klippande analyslager",
                "labelTooltip": "Analyysitaso, jonka kohteilla leikattavan tason kohteita leikataan."
            },
            "union": {
                "label": "Kombinerande analyslager"
            },
            "layer_union": {
                "label": "Kombinerande analyslager",
                "labelTooltip": "Analyysitasot, joiden kohteet viedään samalle tasolle.",
                "notAnalyseLayer": "Välj ett av analyslager",
                "noLayersAvailable": "Analyslager som har samma attribut hittades inte. Du kan hitta mera analyslager genom att klicka \"Mera kartlager\"."
            },
            "areas_and_sectors": {
                "label": "Vyöhykkeet ja sektorit",
                "labelTooltip": "Vyöhykkeiden koko metreinä tai kilometreinä sekä vyöhykkeiden ja sektorien lukumäärä.",
                "area_count": "Antal av zoner",
                "area_size": "Storlek av zoner",
                "sector_count": "Antal av sektorer",
                "area_count_tooltip": "Ge zoner antal.",
                "area_size_tooltip": "Ge zoner storlek.",
                "sector_count_tooltip": "Ge sektorer antal."
            },
            "difference": {
                "firstLayer": "Aikaisempi ajankohta",
                "firstLayerTooltip": "Alkuperäiset tiedot sisältävä analyysitaso.",
                "firstLayerFieldTooltip": "Vertailtava ominaisuustieto ensimmäiseltä tasolta.",
                "secondLayer": "Myöhempi ajankohta",
                "secondLayerTooltip": "Muuttuneet tiedot sisältävä analyysitaso.",
                "secondLayerFieldTooltip": "Vertailtava ominaisuustieto toiselta tasolta.",
                "field": "Valitse ominaisuustieto",
                "keyField": "Yhdistävä ominaisuustieto",
                "keyFieldTooltip": "Ensimmäisen ja toisen tason kohteet yhdistävä ominaisuustieto, joka on yksikäsitteinen."
            },
            "spatial": {
                "label": "Objekt för analys resultat",
                "target": "Leikattava taso",
                "targetTooltip": "Analyysitaso, jolta valitaan kohteita leikkaavan tason kohteiden perusteella.",
                "intersectingLayer": "Leikkaava taso",
                "intersectingLayerTooltip": "Analyysitaso, jonka kohteiden perusteella leikattavalta tasolta valitaan kohteita.",
                "labelTooltipIntersect": 'Analyysiin mukaan otettavat leikattavan tason kohteet. Leikkaavat kohteet ovat ainakin osittain leikkaavan tason kohteiden alueilla, sisältyvät kohteet ovat kokonaan. Den här metoden har designats speciellt för punkt objekt. För område objekt resultaten kan vara felaktig. Använd operator "Ingående" för område objekt.',
                "options": [
                    {
                        "id": "oskari_analyse_intersect",
                        "label": "Klippande objekt",
                        "selected": true
                    },
                    {
                        "id": "oskari_analyse_contains",
                        "label": "Ingående objekt"
                    }
                ]
            },
            "spatial_join": {
                "firstLayer": "Ensimmäinen taso",
                "firstLayerTooltip": "Ensimmäinen yhdistettävä taso, jolta ominaisuustiedot haetaan.",
                "firstLayerFieldTooltip": "Ensimmäisen tason ominaisuustiedot, jotka otetaan analyysiin mukaan. Valitse enintään 10 ominaisuustietoa.",
                "secondLayer": "Toinen taso",
                "secondLayerTooltip": "Toinen yhdistettävä taso, jolta ominaisuustiedot haetaan.",
                "secondLayerFieldTooltip": "Toisen tason ominaisuustiedot, jotka otetaan lopputulokseen mukaan. Valitse enintään 10 ominaisuustietoa.",
                "mode": "Spatial join mode",
                "modeTooltip": "Choose if you want to use aggregate in spatial join",
                "normalMode": "Normal spatial join",
                "aggregateMode": "Aggregate"
            },
            "params": {
                "label": "Attribut data för analys resultat",
                "aggreLabel": "Attribut data för statistiska mått",
                "aggreLabelTooltip": "Ominaisuustiedot, jotka otetaan analyysiin mukaan. Valitse enintään 10 ominaisuustietoa.",
                "labelTooltip": "Ominaisuustiedot, jotka otetaan analyysiin mukaan. Valitse enintään 10 ominaisuustietoa.",
                "tooltip": "",
                "options": [
                    {
                        "id": "oskari_analyse_all",
                        "selected": true,
                        "label": "Alla attribut"
                    },
                    {
                        "id": "oskari_analyse_none",
                        "label": "Inga attribut"
                    },
                    {
                        "id": "oskari_analyse_select",
                        "label": "Välj attribut från listan"
                    }
                ]
            },
            "output": {
                "label": "Utseende",
                "color_label": "Välj stil:",
                "colorset_tooltip": "Välj stil för punkter, linjer och område.",
                "tooltip": "Välj en passande stil dör punkter, linjer och område.",
                "random_color_label": "Slumpmässiga färg"
            },
            "buttons": {
                "save": "Lagra",
                "analyse": "Fortsätta analys",
                "data": "Mera kartlager"
            },
            "filter": {
                "title": "Filtrering",
                "description": "Filtrering för analyslager:",
                "clearButton": "Töm filter",
                "refreshButton": "Uppdatera filter",
                "addFilter": "Tilllägg en ny filter.",
                "removeFilter": "Ta bort en ny filter.",
                "content": {
                    "title": "NOT TRANSLATED"
                },
                "bbox": {
                    "on": "Ta med endast objekt som syns på kartvyn.",
                    "off": "Ta med alla objekt."
                },
                "clickedFeatures": {
                    "clickedFeaturesLabel": "Ta med endast objekt utvalda på kartan.",
                    "filterByGeometryLabel": "NOT TRANSLATED",
                    "filterByGeometryIntersect": "NOT TRANSLATED",
                    "filterByGeometryContains": "NOT TRANSLATED"
                },
                "values": {
                    "title": "Filtrera objekt på grund av attribut data",
                    "placeholders": {
                        "case-sensitive": "Bokstavsstorlek verkar på val.",
                        "attribute": "Attribut",
                        "boolean": "Logisk operator",
                        "operator": "Operator",
                        "attribute-value": "Värde"
                    },
                    "info": {
                        "bboxOff":"NOT TRANSLATED",
                        "filterByGeometrySelected":"NOT TRANSLATED"
                    },
                    "equals": "är lika med",
                    "like": "är ungefär lika med",
                    "notEquals": "är inte lika med",
                    "notLike": "är inte ungefär lika med",
                    "greaterThan": "är större än",
                    "lessThan": "är mindre än",
                    "greaterThanOrEqualTo": "är större än eller lika med",
                    "lessThanOrEqualTo": "är mindre än eller lika med"
                },
                "validation": {
                    "title": "Filter kunde inte uppdateras beroende på följande fel:",
                    "attribute_missing": "Attribut saknas.",
                    "operator_missing": "Operator saknas.",
                    "value_missing": "Värde saknas.",
                    "boolean_operator_missing": "Logisk operator saknas.",
                    "bbox_selected_with_no_properties":"NOT TRANSLATED"
                }
            },
            "help": "Anvisning",
            "success": {
                "layerAdded": {
                    "title": "Analys lyckades.",
                    "message": "Ny analyslager {layer} tilllagt."
                }
            },
            "error": {
                "title": "Fel",
                "invalidSetup": "Parameter är felaktiga. Rätta parameter.",
                "noParameters": "Analyslager och parameter för analys saknas. Välj analyslager och ge analys parameter.",
                "noLayer": "Analyslager saknas. Välj analyslager.",
                "noAnalyseUnionLayer": "Det behövs åtminstone två kartlager för analys. Välj ett annat analyslager.",
                "invalidMethod": "Analysmetod fanns inte. Välj en annan metod.",
                "bufferSize": "Zon storlek är felaktig. Rätta storlek.",
                "illegalCharacters": "Använd endast nummer, inte bokstäver.",
                "nohelp": "Anvisning fanns inte.",
                "saveFailed": "Analys lagring misslyckades. Försök igen senare.",
                "loadLayersFailed": "Analyslager laddning misslyckades. Försök igen senare.",
                "loadLayerTypesFailed": "Datatyp sökning misslyckades. Försök igen senare.",
                "Analyse_parameter_missing": "Parameter saknas. Ge analys parameter.",
                "Unable_to_parse_analysis": "Parameter är felaktiga. Rätta parameter.",
                "Unable_to_get_WPS_features": "Objekt data för analys kunde inte hämtas. Försök igen senare.",
                "WPS_execute_returns_Exception": "Analys utförning misslyckades. Försök igen senare.",
                "WPS_execute_returns_no_features": "Resultaten har inga objekt.",
                "Unable_to_process_aggregate_union": "Statistiska mått för unionen kunde inte beräknas. Försök igen senare.",
                "Unable_to_get_features_for_union": "Objekt data för statiska mått kunde inte hämtas. Försök igen senare.",
                "Unable_to_store_analysis_data": "Analys lagring misslyckades. Försök igen senare.",
                "Unable_to_get_analysisLayer_data": "Analys data läsning misslyckades. Försök igen senare.",
                "timeout": "Analys misslyckades beronde på tidsutlösning. Försök igen senare.",
                "error": "Analys misslyckades. Försök igen senare.",
                "parsererror": "Det finns fel i resultaten."
            },
            "infos": {
                "title": "Info",
                "layer": "Analyslager",
                "over10": "har över 10 attribut. Välj högst 10 attribut för analys. Du hittar en lista av attribut i menu \"Parameter\" när du har valt en analysmetod."
            },
            "aggregatePopup": {
                "title": "Analys resultat",
                "property": "Attribut",
                "close": "Stäng"
            }
        },
        "StartView": {
            "text": "Man kan göra statistiska analys till kartlager som innehåller objekt data. Genom att lagra analys du kan använda resultat också senare.",
            "layersWithFeatures": "Analyysissä voi tehdä valintoja vain yhdeltä tasolta kerrallaan. Valitse miltä tasolta haluat tehdä valinnat. Huom! Muut valinnat poistetaan.",
            "infoseen": {
                "label": "Visa inte det här meddelande igen."
            },
            "buttons": {
                "continue": "Börja analys",
                "cancel": "Avbryt"
            }
        },
        "categoryform": {
            "name": {
                "label": "Namn",
                "placeholder": "Ge analyslager namn"
            },
            "drawing": {
                "label": "NOT TRANSLATED",
                "point": {
                    "label": "Punkt",
                    "color": "Färg",
                    "size": "Storlek"
                },
                "line": {
                    "label": "Linje",
                    "color": "Färg",
                    "size": "Tjocklek"
                },
                "area": {
                    "label": "Område",
                    "fillcolor": "Ifyllnadsfärg",
                    "linecolor": "Linjens färg",
                    "size": "Linjens tjocklek"
                }
            },
            "edit": {
                "title": "Editera kartlagret",
                "save": "Lagra",
                "cancel": "Tillbaka"
            }
        },
        "personalDataTab": {
            "grid": {
                "name": "Namn",
                "delete": "Ta bort"
            },
            "title": "Analyser",
            "confirmDeleteMsg": "Vill du ta bort analyslager:",
            "buttons": {
                "ok": "OK",
                "cancel": "Avbryt",
                "delete": "Ta bort"
            },
            "notification": {
                "deletedTitle": "Ta bort analyslager",
                "deletedMsg": "Analyslager har tagit bort."
            },
            "error": {
                "title": "Fel!",
                "generic": "System fel skedde. Fösök igen senare."
            }
        }
    }
}
);