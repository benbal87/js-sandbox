var _ = require('lodash')

let mockWebsopJSON = {
  'categoryTreeElements': [
    {
      'isActive': null,
      'isMainCategory': null,
      'hasNotExpiredOffer': null,
      'categoryId': 25053,
      'categoryName': 'Webshop',
      'children': [
        {
          'isActive': true,
          'isMainCategory': true,
          'hasNotExpiredOffer': false,
          'categoryId': 25054,
          'categoryName': 'Input alapanyag',
          'children': [
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25055,
              'categoryName': 'Szántóföldi kultúra',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209851,
                  'categoryName': 'Búza',
                  'children': [],
                  'identifier': 'W_3'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209852,
                  'categoryName': 'Egyéb gabona növény',
                  'children': [],
                  'identifier': 'W_4'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209853,
                  'categoryName': 'Kukorica',
                  'children': [],
                  'identifier': 'W_5'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209854,
                  'categoryName': 'Egyéb fűféle takarmány',
                  'children': [],
                  'identifier': 'W_6'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209855,
                  'categoryName': 'Szójabab',
                  'children': [],
                  'identifier': 'W_7'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209856,
                  'categoryName': 'Egyéb pillangós takarmány',
                  'children': [],
                  'identifier': 'W_8'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209857,
                  'categoryName': 'Gyökérgumós  takarmány',
                  'children': [],
                  'identifier': 'W_9'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209858,
                  'categoryName': 'Kabakos leveles takarmány',
                  'children': [],
                  'identifier': 'W_10'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209859,
                  'categoryName': 'Őszi káposztarepce',
                  'children': [],
                  'identifier': 'W_11'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209860,
                  'categoryName': 'Napraforgó',
                  'children': [],
                  'identifier': 'W_12'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209861,
                  'categoryName': 'Egyéb olajnövény',
                  'children': [],
                  'identifier': 'W_13'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209862,
                  'categoryName': 'Rostnövény',
                  'children': [],
                  'identifier': 'W_14'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209863,
                  'categoryName': 'Cukorrépa',
                  'children': [],
                  'identifier': 'W_15'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209864,
                  'categoryName': 'Dohány',
                  'children': [],
                  'identifier': 'W_16'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209865,
                  'categoryName': 'Fűszer, gyógynövény',
                  'children': [],
                  'identifier': 'W_17'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209866,
                  'categoryName': 'Egyéb takarmánynövény',
                  'children': [],
                  'identifier': 'W_18'
                }
              ],
              'identifier': 'W_2'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25056,
              'categoryName': 'Zöldségnövény',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209867,
                  'categoryName': 'Levélzöldség',
                  'children': [],
                  'identifier': 'W_20'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209868,
                  'categoryName': 'Hüvelyes',
                  'children': [],
                  'identifier': 'W_21'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209869,
                  'categoryName': 'Kabakos',
                  'children': [],
                  'identifier': 'W_22'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209870,
                  'categoryName': 'Burgonyaféle',
                  'children': [],
                  'identifier': 'W_23'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209871,
                  'categoryName': 'Káposztaféle',
                  'children': [],
                  'identifier': 'W_24'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209872,
                  'categoryName': 'Hagymaféle',
                  'children': [],
                  'identifier': 'W_25'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209873,
                  'categoryName': 'Gyökérzöldség',
                  'children': [],
                  'identifier': 'W_26'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209874,
                  'categoryName': 'Egyéb zöldségféle',
                  'children': [],
                  'identifier': 'W_27'
                }
              ],
              'identifier': 'W_19'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25057,
              'categoryName': 'Gyümölcs, szőlő',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209875,
                  'categoryName': 'Száraz termésű gyümölcs',
                  'children': [],
                  'identifier': 'W_29'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209876,
                  'categoryName': 'Almatermésű gyümölcs',
                  'children': [],
                  'identifier': 'W_30'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209877,
                  'categoryName': 'Csonthéjas gyümölcs',
                  'children': [],
                  'identifier': 'W_31'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209878,
                  'categoryName': 'Bogyós',
                  'children': [],
                  'identifier': 'W_32'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209879,
                  'categoryName': 'Kivi',
                  'children': [],
                  'identifier': 'W_33'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209880,
                  'categoryName': 'Egyéb gyümölcs',
                  'children': [],
                  'identifier': 'W_34'
                }
              ],
              'identifier': 'W_28'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25058,
              'categoryName': 'Energianövény',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209882,
                  'categoryName': 'Energiaakác',
                  'children': [],
                  'identifier': 'W_37'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209883,
                  'categoryName': 'Energiafűz',
                  'children': [],
                  'identifier': 'W_38'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209884,
                  'categoryName': 'Olasznád',
                  'children': [],
                  'identifier': 'W_39'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209885,
                  'categoryName': 'Energia Miscanthus',
                  'children': [],
                  'identifier': 'W_40'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209886,
                  'categoryName': 'Amerikai bársonymályva',
                  'children': [],
                  'identifier': 'W_41'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209887,
                  'categoryName': 'Egyéb energianövény',
                  'children': [],
                  'identifier': 'W_42'
                }
              ],
              'identifier': 'W_36'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25059,
              'categoryName': 'Dísznövény',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209888,
                  'categoryName': 'Vágott virág',
                  'children': [],
                  'identifier': 'W_44'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209889,
                  'categoryName': 'Cserepes növény',
                  'children': [],
                  'identifier': 'W_45'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209890,
                  'categoryName': 'Díszfaiskolai növény',
                  'children': [],
                  'identifier': 'W_46'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209891,
                  'categoryName': 'Évelő dísznövény',
                  'children': [],
                  'identifier': 'W_47'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209892,
                  'categoryName': 'Karácsonyfa csemete',
                  'children': [],
                  'identifier': 'W_48'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209893,
                  'categoryName': 'Fűmag',
                  'children': [],
                  'identifier': 'W_49'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209894,
                  'categoryName': 'Egyéb dísznövény',
                  'children': [],
                  'identifier': 'W_50'
                }
              ],
              'identifier': 'W_43'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25060,
              'categoryName': 'Termésnövelő',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209896,
                  'categoryName': 'Műtrágya',
                  'children': [],
                  'identifier': 'W_53'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209897,
                  'categoryName': 'Mikrobiológiai készítmény',
                  'children': [],
                  'identifier': 'W_54'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209898,
                  'categoryName': 'Komposzt, szerves trágya',
                  'children': [],
                  'identifier': 'W_55'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209899,
                  'categoryName': 'Egyéb termésnövelő',
                  'children': [],
                  'identifier': 'W_56'
                }
              ],
              'identifier': 'W_52'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25061,
              'categoryName': 'Élőállat szaporító ',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209907,
                  'categoryName': 'Szaporítóanyag',
                  'children': [],
                  'identifier': 'W_65'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209908,
                  'categoryName': 'Embrió',
                  'children': [],
                  'identifier': 'W_66'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209909,
                  'categoryName': 'Tenyésztojás',
                  'children': [],
                  'identifier': 'W_67'
                }
              ],
              'identifier': 'W_64'
            }
          ],
          'identifier': 'W_1'
        },
        {
          'isActive': true,
          'isMainCategory': true,
          'hasNotExpiredOffer': false,
          'categoryId': 25062,
          'categoryName': 'Termény / Termék',
          'children': [
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25063,
              'categoryName': 'Szántóföldi kultúra',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209910,
                  'categoryName': 'Prémium búza',
                  'children': [],
                  'identifier': 'W_70'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209911,
                  'categoryName': 'Malmi I. búza',
                  'children': [],
                  'identifier': 'W_71'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209912,
                  'categoryName': 'Malmi II. búza',
                  'children': [],
                  'identifier': 'W_72'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209913,
                  'categoryName': 'Durumbúza',
                  'children': [],
                  'identifier': 'W_73'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209914,
                  'categoryName': 'Takarmánybúza',
                  'children': [],
                  'identifier': 'W_74'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209915,
                  'categoryName': 'Kukorica',
                  'children': [],
                  'identifier': 'W_75'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209916,
                  'categoryName': 'Őszi káposztarepce',
                  'children': [],
                  'identifier': 'W_76'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209917,
                  'categoryName': 'Napraforgó',
                  'children': [],
                  'identifier': 'W_77'
                }
              ],
              'identifier': 'W_69'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25064,
              'categoryName': 'Koncentrált takarmány',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209918,
                  'categoryName': 'Szemes, abrak takarmány',
                  'children': [],
                  'identifier': 'W_79'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209919,
                  'categoryName': 'Sertés takarmány',
                  'children': [],
                  'identifier': 'W_80'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209920,
                  'categoryName': 'Baromfi takarmány',
                  'children': [],
                  'identifier': 'W_81'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209921,
                  'categoryName': 'Szarvasmarha takarmány',
                  'children': [],
                  'identifier': 'W_82'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209922,
                  'categoryName': 'Lóféle takarmány',
                  'children': [],
                  'identifier': 'W_83'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209923,
                  'categoryName': 'Hal takarmány',
                  'children': [],
                  'identifier': 'W_84'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209924,
                  'categoryName': 'Juh, kecske',
                  'children': [],
                  'identifier': 'W_85'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209925,
                  'categoryName': 'Nyúl, prémes takarmány',
                  'children': [],
                  'identifier': 'W_86'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209926,
                  'categoryName': 'Egyéb állat takarmány',
                  'children': [],
                  'identifier': 'W_87'
                }
              ],
              'identifier': 'W_78'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25065,
              'categoryName': 'Erdészeti áru',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209927,
                  'categoryName': 'Erdészeti növény',
                  'children': [],
                  'identifier': 'W_89'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209928,
                  'categoryName': 'Tűzifa',
                  'children': [],
                  'identifier': 'W_90'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209929,
                  'categoryName': 'Iparifa',
                  'children': [],
                  'identifier': 'W_91'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209930,
                  'categoryName': 'Erdei melléktermék',
                  'children': [],
                  'identifier': 'W_92'
                }
              ],
              'identifier': 'W_88'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25066,
              'categoryName': 'Dísznövény áru',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209931,
                  'categoryName': 'Vágott virág',
                  'children': [],
                  'identifier': 'W_94'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209932,
                  'categoryName': 'Cserepes növény',
                  'children': [],
                  'identifier': 'W_95'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209933,
                  'categoryName': 'Díszfaiskolai növény',
                  'children': [],
                  'identifier': 'W_96'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209934,
                  'categoryName': 'Évelő dísznövény',
                  'children': [],
                  'identifier': 'W_97'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209935,
                  'categoryName': 'Gyeptégla, gyepszőnyeg',
                  'children': [],
                  'identifier': 'W_98'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 209936,
                  'categoryName': 'Egyéb dísznövény áru',
                  'children': [],
                  'identifier': 'W_99'
                }
              ],
              'identifier': 'W_93'
            }
          ],
          'identifier': 'W_68'
        },
        {
          'isActive': true,
          'isMainCategory': true,
          'hasNotExpiredOffer': false,
          'categoryId': 25067,
          'categoryName': 'Gép',
          'children': [
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25068,
              'categoryName': 'Traktor',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25069,
                  'categoryName': 'Hagyományos traktor',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209937,
                      'categoryName': 'Kerekes traktor',
                      'children': [],
                      'identifier': 'W_103'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209938,
                      'categoryName': 'Lánctalpas traktor',
                      'children': [],
                      'identifier': 'W_104'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209939,
                      'categoryName': 'Gumihevederes traktor',
                      'children': [],
                      'identifier': 'W_105'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209940,
                      'categoryName': 'Egyéb hagyományos traktor',
                      'children': [],
                      'identifier': 'W_106'
                    }
                  ],
                  'identifier': 'W_102'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25070,
                  'categoryName': 'Különleges traktor',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209941,
                      'categoryName': 'Eszközhordozó',
                      'children': [],
                      'identifier': 'W_108'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209942,
                      'categoryName': 'Hidastraktor',
                      'children': [],
                      'identifier': 'W_109'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209943,
                      'categoryName': 'Multifunkciós traktor',
                      'children': [],
                      'identifier': 'W_110'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209944,
                      'categoryName': 'Egyéb különleges traktor',
                      'children': [],
                      'identifier': 'W_111'
                    }
                  ],
                  'identifier': 'W_107'
                }
              ],
              'identifier': 'W_101'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25071,
              'categoryName': 'Magajáró betakarító',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25072,
                  'categoryName': 'Szántóföldi betakarító',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209945,
                      'categoryName': 'Arató - cséplő gép',
                      'children': [],
                      'identifier': 'W_114'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209946,
                      'categoryName': 'Kukorica betakarító',
                      'children': [],
                      'identifier': 'W_115'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209947,
                      'categoryName': 'Cukorrépa betakarító',
                      'children': [],
                      'identifier': 'W_116'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209948,
                      'categoryName': 'Szálastakarmány kaszáló',
                      'children': [],
                      'identifier': 'W_117'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209949,
                      'categoryName': 'Járvaszecskázó',
                      'children': [],
                      'identifier': 'W_118'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209950,
                      'categoryName': 'Paradicsom betakarító',
                      'children': [],
                      'identifier': 'W_119'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209951,
                      'categoryName': 'Zöldborsó, bab betakarító',
                      'children': [],
                      'identifier': 'W_120'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209952,
                      'categoryName': 'Egyéb zöldség betakarító',
                      'children': [],
                      'identifier': 'W_121'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209953,
                      'categoryName': 'Egyéb betakarító',
                      'children': [],
                      'identifier': 'W_122'
                    }
                  ],
                  'identifier': 'W_113'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25073,
                  'categoryName': 'Egyéb betakarító',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209954,
                      'categoryName': 'Gyümölcs betakarító',
                      'children': [],
                      'identifier': 'W_124'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209955,
                      'categoryName': 'Szőlőbetakarító',
                      'children': [],
                      'identifier': 'W_125'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209956,
                      'categoryName': 'Egyéb betakarító',
                      'children': [],
                      'identifier': 'W_126'
                    }
                  ],
                  'identifier': 'W_123'
                }
              ],
              'identifier': 'W_112'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25074,
              'categoryName': 'Egyéb magajáró gép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25075,
                  'categoryName': 'Magajáró rakodó',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209957,
                      'categoryName': 'Homlokrakodó',
                      'children': [],
                      'identifier': 'W_129'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209958,
                      'categoryName': 'Forgórakodó',
                      'children': [],
                      'identifier': 'W_130'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209959,
                      'categoryName': 'Teleszkópos rakodó',
                      'children': [],
                      'identifier': 'W_131'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209960,
                      'categoryName': 'Targonca, tereptargonca',
                      'children': [],
                      'identifier': 'W_132'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209961,
                      'categoryName': 'Egyéb rakodó',
                      'children': [],
                      'identifier': 'W_133'
                    }
                  ],
                  'identifier': 'W_128'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25076,
                  'categoryName': 'Magajáró egyéb gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209962,
                      'categoryName': 'Permetező',
                      'children': [],
                      'identifier': 'W_135'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209963,
                      'categoryName': 'Tápanyag kijuttató',
                      'children': [],
                      'identifier': 'W_136'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209964,
                      'categoryName': 'Talajba injektáló',
                      'children': [],
                      'identifier': 'W_137'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209965,
                      'categoryName': 'Takarmánykeverő - kiosztó',
                      'children': [],
                      'identifier': 'W_138'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209966,
                      'categoryName': 'Silómaró - kiosztó',
                      'children': [],
                      'identifier': 'W_139'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209967,
                      'categoryName': 'Földmunkagép',
                      'children': [],
                      'identifier': 'W_140'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209968,
                      'categoryName': 'Dömper',
                      'children': [],
                      'identifier': 'W_141'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209969,
                      'categoryName': 'Járóképes alváz',
                      'children': [],
                      'identifier': 'W_142'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209970,
                      'categoryName': 'Egyéb magajáró',
                      'children': [],
                      'identifier': 'W_143'
                    }
                  ],
                  'identifier': 'W_134'
                }
              ],
              'identifier': 'W_127'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25077,
              'categoryName': 'Talajművelő, földmunkagép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25078,
                  'categoryName': 'Eke',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209971,
                      'categoryName': 'Ágyeke',
                      'children': [],
                      'identifier': 'W_146'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209972,
                      'categoryName': 'Váltvaforgató eke',
                      'children': [],
                      'identifier': 'W_147'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209973,
                      'categoryName': 'Mélyforgató eke',
                      'children': [],
                      'identifier': 'W_148'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209974,
                      'categoryName': 'Egyéb eke',
                      'children': [],
                      'identifier': 'W_149'
                    }
                  ],
                  'identifier': 'W_145'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25079,
                  'categoryName': 'Borona',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209975,
                      'categoryName': 'Fogasborona',
                      'children': [],
                      'identifier': 'W_151'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209976,
                      'categoryName': 'Rotációs borona',
                      'children': [],
                      'identifier': 'W_152'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209977,
                      'categoryName': 'Rétborona, láncos borona',
                      'children': [],
                      'identifier': 'W_153'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209978,
                      'categoryName': 'Egyéb borona',
                      'children': [],
                      'identifier': 'W_154'
                    }
                  ],
                  'identifier': 'W_150'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25080,
                  'categoryName': 'Henger',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209979,
                      'categoryName': 'Sima henger',
                      'children': [],
                      'identifier': 'W_156'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209980,
                      'categoryName': 'Gyűrűs henger',
                      'children': [],
                      'identifier': 'W_157'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209981,
                      'categoryName': 'Rögtörő henger',
                      'children': [],
                      'identifier': 'W_158'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209982,
                      'categoryName': 'Hengerborona',
                      'children': [],
                      'identifier': 'W_159'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209983,
                      'categoryName': 'Pálcáshenger',
                      'children': [],
                      'identifier': 'W_160'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209984,
                      'categoryName': 'Egyéb henger',
                      'children': [],
                      'identifier': 'W_161'
                    }
                  ],
                  'identifier': 'W_155'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25081,
                  'categoryName': 'Tárcsás talajművelő',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209985,
                      'categoryName': 'Tárcsás borona',
                      'children': [],
                      'identifier': 'W_163'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209986,
                      'categoryName': 'Egyirányú tárcsa',
                      'children': [],
                      'identifier': 'W_164'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209987,
                      'categoryName': 'Ásóborona',
                      'children': [],
                      'identifier': 'W_165'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209988,
                      'categoryName': 'Egyéb tárcsás művelő',
                      'children': [],
                      'identifier': 'W_166'
                    }
                  ],
                  'identifier': 'W_162'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25082,
                  'categoryName': 'Kultivátor',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209989,
                      'categoryName': 'Szántóföldi kultivátor',
                      'children': [],
                      'identifier': 'W_168'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209990,
                      'categoryName': 'Sorközművelő kultivátor',
                      'children': [],
                      'identifier': 'W_169'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209991,
                      'categoryName': 'Ültetvény kultivátor',
                      'children': [],
                      'identifier': 'W_170'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209992,
                      'categoryName': 'Egyéb kultivátor',
                      'children': [],
                      'identifier': 'W_171'
                    }
                  ],
                  'identifier': 'W_167'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25083,
                  'categoryName': 'Magágykészítő',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209993,
                      'categoryName': 'Magágykészítő',
                      'children': [],
                      'identifier': 'W_173'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209994,
                      'categoryName': 'Magágykészítő adapter',
                      'children': [],
                      'identifier': 'W_174'
                    }
                  ],
                  'identifier': 'W_172'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25084,
                  'categoryName': 'Talajlazító',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209995,
                      'categoryName': 'Középmélylazító',
                      'children': [],
                      'identifier': 'W_176'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209996,
                      'categoryName': 'Mélylazító',
                      'children': [],
                      'identifier': 'W_177'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209997,
                      'categoryName': 'Egyéb kombinált lazító',
                      'children': [],
                      'identifier': 'W_178'
                    }
                  ],
                  'identifier': 'W_175'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25085,
                  'categoryName': 'Egyéb talajművelő gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209998,
                      'categoryName': 'Simító',
                      'children': [],
                      'identifier': 'W_180'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 209999,
                      'categoryName': 'Szántáselmunkáló',
                      'children': [],
                      'identifier': 'W_181'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210000,
                      'categoryName': 'Talajmaró',
                      'children': [],
                      'identifier': 'W_182'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210001,
                      'categoryName': 'Ásógép',
                      'children': [],
                      'identifier': 'W_183'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210002,
                      'categoryName': 'Bakhátkészítő',
                      'children': [],
                      'identifier': 'W_184'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210003,
                      'categoryName': 'Ágyáskészítő',
                      'children': [],
                      'identifier': 'W_185'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210004,
                      'categoryName': 'Burgonya töltögető',
                      'children': [],
                      'identifier': 'W_186'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210005,
                      'categoryName': 'Küllőskapa',
                      'children': [],
                      'identifier': 'W_187'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210006,
                      'categoryName': 'Egyéb talajmővelő',
                      'children': [],
                      'identifier': 'W_188'
                    }
                  ],
                  'identifier': 'W_179'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25086,
                  'categoryName': 'Földmunkagép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210007,
                      'categoryName': 'Tereprendező, egyengető',
                      'children': [],
                      'identifier': 'W_190'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210008,
                      'categoryName': 'Tolólap, vonólap',
                      'children': [],
                      'identifier': 'W_191'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210009,
                      'categoryName': 'Gödörfúrók',
                      'children': [],
                      'identifier': 'W_192'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210010,
                      'categoryName': 'Árokásó és - karbantartó',
                      'children': [],
                      'identifier': 'W_193'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210011,
                      'categoryName': 'Egyéb földmunkagép',
                      'children': [],
                      'identifier': 'W_194'
                    }
                  ],
                  'identifier': 'W_189'
                }
              ],
              'identifier': 'W_144'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25087,
              'categoryName': 'Vető és ültetőgép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25088,
                  'categoryName': 'Vetőgép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210012,
                      'categoryName': 'Gabona vetőgép',
                      'children': [],
                      'identifier': 'W_197'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210013,
                      'categoryName': 'Kukorica vetőgép',
                      'children': [],
                      'identifier': 'W_198'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210014,
                      'categoryName': 'Cukorrépa vetőgép',
                      'children': [],
                      'identifier': 'W_199'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210015,
                      'categoryName': 'Zöldség vetőgép',
                      'children': [],
                      'identifier': 'W_200'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210016,
                      'categoryName': 'Aprómag vetőgép',
                      'children': [],
                      'identifier': 'W_201'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210017,
                      'categoryName': 'Egyéb vetőgép',
                      'children': [],
                      'identifier': 'W_202'
                    }
                  ],
                  'identifier': 'W_196'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25089,
                  'categoryName': 'Ültetőgép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210018,
                      'categoryName': 'Burgonyaültető gép',
                      'children': [],
                      'identifier': 'W_204'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210019,
                      'categoryName': 'Palántázógép',
                      'children': [],
                      'identifier': 'W_205'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210020,
                      'categoryName': 'Csemeteültető gép',
                      'children': [],
                      'identifier': 'W_206'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210021,
                      'categoryName': 'Egyéb ültető gép',
                      'children': [],
                      'identifier': 'W_207'
                    }
                  ],
                  'identifier': 'W_203'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25090,
                  'categoryName': 'Vetés - ültetés egyéb gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210022,
                      'categoryName': 'Vetőadapter',
                      'children': [],
                      'identifier': 'W_209'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210023,
                      'categoryName': 'Vetőmagfeltöltő',
                      'children': [],
                      'identifier': 'W_210'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210024,
                      'categoryName': 'Fólia kezelő',
                      'children': [],
                      'identifier': 'W_211'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210025,
                      'categoryName': 'Egyéb vetés kiegészítő',
                      'children': [],
                      'identifier': 'W_212'
                    }
                  ],
                  'identifier': 'W_208'
                }
              ],
              'identifier': 'W_195'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25091,
              'categoryName': 'Növényvédő gép ',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25092,
                  'categoryName': 'Permetező gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210026,
                      'categoryName': 'Szántóföldi permetező',
                      'children': [],
                      'identifier': 'W_215'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210027,
                      'categoryName': 'Ültetvény permetező',
                      'children': [],
                      'identifier': 'W_216'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210028,
                      'categoryName': 'Porozó gép',
                      'children': [],
                      'identifier': 'W_217'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210029,
                      'categoryName': 'Talajba injektáló',
                      'children': [],
                      'identifier': 'W_218'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210030,
                      'categoryName': 'Permetező adapter',
                      'children': [],
                      'identifier': 'W_219'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210031,
                      'categoryName': 'Permetező kiegészítő',
                      'children': [],
                      'identifier': 'W_220'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210032,
                      'categoryName': 'Permetező szivattyú',
                      'children': [],
                      'identifier': 'W_221'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210033,
                      'categoryName': 'Egyéb permetező',
                      'children': [],
                      'identifier': 'W_222'
                    }
                  ],
                  'identifier': 'W_214'
                }
              ],
              'identifier': 'W_213'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25093,
              'categoryName': 'Tápanyag kijuttató',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25094,
                  'categoryName': 'Műtrágyaszóró gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210034,
                      'categoryName': 'Műtrágyaszóró gép',
                      'children': [],
                      'identifier': 'W_225'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210035,
                      'categoryName': 'Folyadék, gáz injektáló',
                      'children': [],
                      'identifier': 'W_226'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210036,
                      'categoryName': 'Cserélhető felépítmény',
                      'children': [],
                      'identifier': 'W_227'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210037,
                      'categoryName': 'Műtrágyázó egyéb adapter',
                      'children': [],
                      'identifier': 'W_228'
                    }
                  ],
                  'identifier': 'W_224'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25095,
                  'categoryName': 'Szervestrágyaszóró',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210038,
                      'categoryName': 'Szervestrágya - szóró',
                      'children': [],
                      'identifier': 'W_230'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210039,
                      'categoryName': 'Szervestrágyázó adapter',
                      'children': [],
                      'identifier': 'W_231'
                    }
                  ],
                  'identifier': 'W_229'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25096,
                  'categoryName': 'Hígtrágya kijuttató',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210040,
                      'categoryName': 'Hígtrágya kijuttató',
                      'children': [],
                      'identifier': 'W_233'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210041,
                      'categoryName': 'Hígtrágyázó egyéb adapter',
                      'children': [],
                      'identifier': 'W_234'
                    }
                  ],
                  'identifier': 'W_232'
                }
              ],
              'identifier': 'W_223'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25097,
              'categoryName': 'Betakarítógép adapter',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25098,
                  'categoryName': 'Gabona betakarító adapter',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210042,
                      'categoryName': 'Gabona vágóasztal',
                      'children': [],
                      'identifier': 'W_237'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210043,
                      'categoryName': 'Szalmaszecskázó',
                      'children': [],
                      'identifier': 'W_238'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210044,
                      'categoryName': 'Egyéb gabona betakarító',
                      'children': [],
                      'identifier': 'W_239'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210045,
                      'categoryName': 'Egyéb gabona adapter',
                      'children': [],
                      'identifier': 'W_240'
                    }
                  ],
                  'identifier': 'W_236'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25099,
                  'categoryName': 'Kukorica adapter',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210046,
                      'categoryName': 'Csőtörő gép',
                      'children': [],
                      'identifier': 'W_242'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210047,
                      'categoryName': 'Csőtörő adapter',
                      'children': [],
                      'identifier': 'W_243'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210048,
                      'categoryName': 'Járva szecskázó',
                      'children': [],
                      'identifier': 'W_244'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210049,
                      'categoryName': 'Silózó adapter',
                      'children': [],
                      'identifier': 'W_245'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210050,
                      'categoryName': 'Szárzúzó, mulcsozó',
                      'children': [],
                      'identifier': 'W_246'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210051,
                      'categoryName': 'Egyéb kukorica adapter',
                      'children': [],
                      'identifier': 'W_247'
                    }
                  ],
                  'identifier': 'W_241'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25100,
                  'categoryName': 'Cukorrépa adapter',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210052,
                      'categoryName': 'Cukorrépafejező',
                      'children': [],
                      'identifier': 'W_249'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210053,
                      'categoryName': 'Cukorrépakiszedő',
                      'children': [],
                      'identifier': 'W_250'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210054,
                      'categoryName': 'Cukorrépafelszedő',
                      'children': [],
                      'identifier': 'W_251'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210055,
                      'categoryName': 'Egymenetes répabetakarító',
                      'children': [],
                      'identifier': 'W_252'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210056,
                      'categoryName': 'Egyéb répabetakarító',
                      'children': [],
                      'identifier': 'W_253'
                    }
                  ],
                  'identifier': 'W_248'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25101,
                  'categoryName': 'Burgonya adapter',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210057,
                      'categoryName': 'Kiszedő',
                      'children': [],
                      'identifier': 'W_255'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210058,
                      'categoryName': 'Felszedő, kocsirakó',
                      'children': [],
                      'identifier': 'W_256'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210059,
                      'categoryName': 'Egymenetes betakarító',
                      'children': [],
                      'identifier': 'W_257'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210060,
                      'categoryName': 'Egyéb burgonyabetakarító',
                      'children': [],
                      'identifier': 'W_258'
                    }
                  ],
                  'identifier': 'W_254'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25102,
                  'categoryName': 'Szálastakarmány adapter',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210061,
                      'categoryName': 'Fűkasza',
                      'children': [],
                      'identifier': 'W_260'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210062,
                      'categoryName': 'Rendre arató',
                      'children': [],
                      'identifier': 'W_261'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210063,
                      'categoryName': 'Rendsodró, rendkezelő',
                      'children': [],
                      'identifier': 'W_262'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210064,
                      'categoryName': 'Rendforgató',
                      'children': [],
                      'identifier': 'W_263'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210065,
                      'categoryName': 'Rendfelszedő adapter',
                      'children': [],
                      'identifier': 'W_264'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210066,
                      'categoryName': 'Rendfelszedő pótkocsi',
                      'children': [],
                      'identifier': 'W_265'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210067,
                      'categoryName': 'Bálázó (kis, henger, big)',
                      'children': [],
                      'identifier': 'W_266'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210068,
                      'categoryName': 'Bálacsomagoló',
                      'children': [],
                      'identifier': 'W_267'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210069,
                      'categoryName': 'Bálafelszedő, beszállító',
                      'children': [],
                      'identifier': 'W_268'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210070,
                      'categoryName': 'Gereblye',
                      'children': [],
                      'identifier': 'W_269'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210071,
                      'categoryName': 'Egyéb eszköz',
                      'children': [],
                      'identifier': 'W_270'
                    }
                  ],
                  'identifier': 'W_259'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25103,
                  'categoryName': 'Egyéb szántóföldi adapter',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210072,
                      'categoryName': 'Napraforgó betakarító',
                      'children': [],
                      'identifier': 'W_272'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210073,
                      'categoryName': 'Hüvelyes adapter, toldat',
                      'children': [],
                      'identifier': 'W_273'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210074,
                      'categoryName': 'Zöldborsó betakarító',
                      'children': [],
                      'identifier': 'W_274'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210075,
                      'categoryName': 'Bab betakarító',
                      'children': [],
                      'identifier': 'W_275'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210076,
                      'categoryName': 'Hagymabetakarító',
                      'children': [],
                      'identifier': 'W_276'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210077,
                      'categoryName': 'Gyökérzöldség betakarító',
                      'children': [],
                      'identifier': 'W_277'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210078,
                      'categoryName': 'Egyéb zöldség betekarító',
                      'children': [],
                      'identifier': 'W_278'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210079,
                      'categoryName': 'Mák, tök  betakarító',
                      'children': [],
                      'identifier': 'W_279'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210080,
                      'categoryName': 'Speciális betakarító',
                      'children': [],
                      'identifier': 'W_280'
                    }
                  ],
                  'identifier': 'W_271'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25104,
                  'categoryName': 'Gyümölcs betakarító',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210081,
                      'categoryName': 'Gyümölcs betakarítógép',
                      'children': [],
                      'identifier': 'W_282'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210082,
                      'categoryName': 'Rázógép, gyüjtőernyő',
                      'children': [],
                      'identifier': 'W_283'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210083,
                      'categoryName': 'Szőlő betakarítógép',
                      'children': [],
                      'identifier': 'W_284'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210084,
                      'categoryName': 'Egyéb betakarítógép',
                      'children': [],
                      'identifier': 'W_285'
                    }
                  ],
                  'identifier': 'W_281'
                }
              ],
              'identifier': 'W_235'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25105,
              'categoryName': 'Álló munkák gépei',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25106,
                  'categoryName': 'Rakodógép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210085,
                      'categoryName': 'Vontatott rakodógép',
                      'children': [],
                      'identifier': 'W_288'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210086,
                      'categoryName': 'Rászerelt rakodógép',
                      'children': [],
                      'identifier': 'W_289'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210087,
                      'categoryName': 'Rakodógép villa, kanál',
                      'children': [],
                      'identifier': 'W_290'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210088,
                      'categoryName': 'Egyéb rakodógép adapter',
                      'children': [],
                      'identifier': 'W_291'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210089,
                      'categoryName': 'Láda, tartály, konténer',
                      'children': [],
                      'identifier': 'W_292'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210090,
                      'categoryName': 'Szállítófelépítmény',
                      'children': [],
                      'identifier': 'W_293'
                    }
                  ],
                  'identifier': 'W_287'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25107,
                  'categoryName': 'Stabil traktoros munkagép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210091,
                      'categoryName': 'Víz és egyéb szivattyú',
                      'children': [],
                      'identifier': 'W_295'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210092,
                      'categoryName': 'Zagyszivattyú',
                      'children': [],
                      'identifier': 'W_296'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210093,
                      'categoryName': 'Zagy -, hígtrágya keverő',
                      'children': [],
                      'identifier': 'W_297'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210094,
                      'categoryName': 'Daráló, morzsoló',
                      'children': [],
                      'identifier': 'W_298'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210095,
                      'categoryName': 'Takarmánykeverő',
                      'children': [],
                      'identifier': 'W_299'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210096,
                      'categoryName': 'Egyéb (beton) keverő',
                      'children': [],
                      'identifier': 'W_300'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210097,
                      'categoryName': 'Egyéb stabil üzemű gép',
                      'children': [],
                      'identifier': 'W_301'
                    }
                  ],
                  'identifier': 'W_294'
                }
              ],
              'identifier': 'W_286'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25108,
              'categoryName': 'Egyéb munkák gépei',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25109,
                  'categoryName': 'Gyümölcs -, szőlőápolás',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210098,
                      'categoryName': 'Bogyózó, zúzó',
                      'children': [],
                      'identifier': 'W_304'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210099,
                      'categoryName': 'Prés',
                      'children': [],
                      'identifier': 'W_305'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210100,
                      'categoryName': 'Soraljművelő',
                      'children': [],
                      'identifier': 'W_306'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210101,
                      'categoryName': 'Törzstisztító',
                      'children': [],
                      'identifier': 'W_307'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210102,
                      'categoryName': 'Metsző, szőlőcsonkázó',
                      'children': [],
                      'identifier': 'W_308'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210103,
                      'categoryName': 'Szőlő levéltépő, kötöző',
                      'children': [],
                      'identifier': 'W_309'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210104,
                      'categoryName': 'Kombinált szőlőművelő',
                      'children': [],
                      'identifier': 'W_310'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210105,
                      'categoryName': 'Mulcsozó, zúzó, sorkasza',
                      'children': [],
                      'identifier': 'W_311'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210106,
                      'categoryName': 'Oszlopnyomó, karózó',
                      'children': [],
                      'identifier': 'W_312'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210107,
                      'categoryName': 'Egyéb szőlőápoló',
                      'children': [],
                      'identifier': 'W_313'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210108,
                      'categoryName': 'Egyéb gyümölcsápoló',
                      'children': [],
                      'identifier': 'W_314'
                    }
                  ],
                  'identifier': 'W_303'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25110,
                  'categoryName': 'Takarmányozás, almozás',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210109,
                      'categoryName': 'Silótöltő présgép',
                      'children': [],
                      'identifier': 'W_316'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210110,
                      'categoryName': 'Bálabontó, aprító, terítő',
                      'children': [],
                      'identifier': 'W_317'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210111,
                      'categoryName': 'Silóvágó, blokkvágó',
                      'children': [],
                      'identifier': 'W_318'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210112,
                      'categoryName': 'Takarmánykeverő, kiosztó',
                      'children': [],
                      'identifier': 'W_319'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210113,
                      'categoryName': 'Egyéb takarmányozási gép',
                      'children': [],
                      'identifier': 'W_320'
                    }
                  ],
                  'identifier': 'W_315'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25111,
                  'categoryName': 'Egyéb álló, vegyes munka',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210114,
                      'categoryName': 'Permetlékeverő, feltöltő',
                      'children': [],
                      'identifier': 'W_322'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210115,
                      'categoryName': 'Komposztáló, zúzó',
                      'children': [],
                      'identifier': 'W_323'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210116,
                      'categoryName': 'Seprő, csörlő, emelő',
                      'children': [],
                      'identifier': 'W_324'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210117,
                      'categoryName': 'Ároktisztító, kotró gép',
                      'children': [],
                      'identifier': 'W_325'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210118,
                      'categoryName': 'Egyéb majori gép',
                      'children': [],
                      'identifier': 'W_326'
                    }
                  ],
                  'identifier': 'W_321'
                }
              ],
              'identifier': 'W_302'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25112,
              'categoryName': 'Szállító jármű, pótkocsi',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25113,
                  'categoryName': 'Kéttengelyű pótkocsi',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210119,
                      'categoryName': 'Fixplatós',
                      'children': [],
                      'identifier': 'W_329'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210120,
                      'categoryName': 'Billenős',
                      'children': [],
                      'identifier': 'W_330'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210121,
                      'categoryName': 'Speciális felépítményű',
                      'children': [],
                      'identifier': 'W_331'
                    }
                  ],
                  'identifier': 'W_328'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25114,
                  'categoryName': 'Egytengelyű pótkocsi',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210122,
                      'categoryName': 'Fixplatós',
                      'children': [],
                      'identifier': 'W_333'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210123,
                      'categoryName': 'Billenős',
                      'children': [],
                      'identifier': 'W_334'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210124,
                      'categoryName': 'Speciális felépítményű',
                      'children': [],
                      'identifier': 'W_335'
                    }
                  ],
                  'identifier': 'W_332'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25115,
                  'categoryName': 'Különleges pótkocsi',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210125,
                      'categoryName': 'Adapter és gépszállító',
                      'children': [],
                      'identifier': 'W_337'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210126,
                      'categoryName': 'Egyéb különleges pótkocsi',
                      'children': [],
                      'identifier': 'W_338'
                    }
                  ],
                  'identifier': 'W_336'
                }
              ],
              'identifier': 'W_327'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25116,
              'categoryName': 'Öntözés gép, berendezés',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25117,
                  'categoryName': 'Öntözőcső, szerelvény',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210127,
                      'categoryName': 'Öntözőcső, csőhálózat',
                      'children': [],
                      'identifier': 'W_341'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210128,
                      'categoryName': 'Csőszerelvény',
                      'children': [],
                      'identifier': 'W_342'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210129,
                      'categoryName': 'Szórófej',
                      'children': [],
                      'identifier': 'W_343'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210130,
                      'categoryName': 'Öntözőkonzol',
                      'children': [],
                      'identifier': 'W_344'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210131,
                      'categoryName': 'Csepegtető öntöző',
                      'children': [],
                      'identifier': 'W_345'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210132,
                      'categoryName': 'Öntöződob',
                      'children': [],
                      'identifier': 'W_346'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210133,
                      'categoryName': 'Tápoldatozó',
                      'children': [],
                      'identifier': 'W_347'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210134,
                      'categoryName': 'Öntözőkocsi',
                      'children': [],
                      'identifier': 'W_348'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210135,
                      'categoryName': 'Öntöző automatika',
                      'children': [],
                      'identifier': 'W_349'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210136,
                      'categoryName': 'Csepegtetőrendszer',
                      'children': [],
                      'identifier': 'W_350'
                    }
                  ],
                  'identifier': 'W_340'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25118,
                  'categoryName': 'Öntöző gép és berendezés',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210137,
                      'categoryName': 'Csévélhető dobos öntöző',
                      'children': [],
                      'identifier': 'W_352'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210138,
                      'categoryName': 'Lineár öntöző',
                      'children': [],
                      'identifier': 'W_353'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210139,
                      'categoryName': 'Körforgó öntöző',
                      'children': [],
                      'identifier': 'W_354'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210140,
                      'categoryName': 'Öntöző szivattyú',
                      'children': [],
                      'identifier': 'W_355'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210141,
                      'categoryName': 'Szivattyús aggregát',
                      'children': [],
                      'identifier': 'W_356'
                    }
                  ],
                  'identifier': 'W_351'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25119,
                  'categoryName': 'Egyéb öntöző részegység',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210142,
                      'categoryName': 'Szűrő víztisztító',
                      'children': [],
                      'identifier': 'W_358'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210143,
                      'categoryName': 'Tápoldatozó, adagoló',
                      'children': [],
                      'identifier': 'W_359'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210144,
                      'categoryName': 'Vízmérő',
                      'children': [],
                      'identifier': 'W_360'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210145,
                      'categoryName': 'Öntöző részegység',
                      'children': [],
                      'identifier': 'W_361'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210146,
                      'categoryName': 'Egyéb öntöző tartozék',
                      'children': [],
                      'identifier': 'W_362'
                    }
                  ],
                  'identifier': 'W_357'
                }
              ],
              'identifier': 'W_339'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25120,
              'categoryName': 'Anyagmozgató gép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25121,
                  'categoryName': 'Szállítóberendezés',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210147,
                      'categoryName': 'Szállítószalag',
                      'children': [],
                      'identifier': 'W_365'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210148,
                      'categoryName': 'Láncos szállító',
                      'children': [],
                      'identifier': 'W_366'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210149,
                      'categoryName': 'Szállítócsiga',
                      'children': [],
                      'identifier': 'W_367'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210150,
                      'categoryName': 'Serleges felhordó',
                      'children': [],
                      'identifier': 'W_368'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210151,
                      'categoryName': 'Beépített fogadógarat',
                      'children': [],
                      'identifier': 'W_369'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210152,
                      'categoryName': 'Mobil fogadógarat',
                      'children': [],
                      'identifier': 'W_370'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210153,
                      'categoryName': 'Anyagmozgató kiegészítő',
                      'children': [],
                      'identifier': 'W_371'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210154,
                      'categoryName': 'Speciális láncos szállító',
                      'children': [],
                      'identifier': 'W_372'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210155,
                      'categoryName': 'Egyéb szállítóberendezés',
                      'children': [],
                      'identifier': 'W_373'
                    }
                  ],
                  'identifier': 'W_364'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25122,
                  'categoryName': 'Felszedő, rakodó',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210156,
                      'categoryName': 'Mechanikus',
                      'children': [],
                      'identifier': 'W_375'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210157,
                      'categoryName': 'Pneumatikus',
                      'children': [],
                      'identifier': 'W_376'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210158,
                      'categoryName': 'Egyéb felszedő, rakodó',
                      'children': [],
                      'identifier': 'W_377'
                    }
                  ],
                  'identifier': 'W_374'
                }
              ],
              'identifier': 'W_363'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25123,
              'categoryName': 'Elsődleges feldolgozó gép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25124,
                  'categoryName': 'Magtisztító, osztályozó',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210159,
                      'categoryName': 'Univerzális magtisztító',
                      'children': [],
                      'identifier': 'W_380'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210160,
                      'categoryName': 'Univerzális előtisztító',
                      'children': [],
                      'identifier': 'W_381'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210161,
                      'categoryName': 'Univerzális utótisztító',
                      'children': [],
                      'identifier': 'W_382'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210162,
                      'categoryName': 'Finomtisztító',
                      'children': [],
                      'identifier': 'W_383'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210163,
                      'categoryName': 'Vetőmag - osztályozó',
                      'children': [],
                      'identifier': 'W_384'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210164,
                      'categoryName': 'Hengerrosta',
                      'children': [],
                      'identifier': 'W_385'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210165,
                      'categoryName': 'Triőr',
                      'children': [],
                      'identifier': 'W_386'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210166,
                      'categoryName': 'Szeparátor',
                      'children': [],
                      'identifier': 'W_387'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210167,
                      'categoryName': 'Egyéb magtisztító',
                      'children': [],
                      'identifier': 'W_388'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210168,
                      'categoryName': 'Egyéb kiegészítő',
                      'children': [],
                      'identifier': 'W_389'
                    }
                  ],
                  'identifier': 'W_379'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25125,
                  'categoryName': 'Egyéb termény feldolgozás',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210169,
                      'categoryName': 'Burgonya feldolgozás',
                      'children': [],
                      'identifier': 'W_391'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210170,
                      'categoryName': 'Gyökérzöldség feldolgozás',
                      'children': [],
                      'identifier': 'W_392'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210171,
                      'categoryName': 'Gyümölcs feldolgozás',
                      'children': [],
                      'identifier': 'W_393'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210172,
                      'categoryName': 'Szőlő feldolgozás',
                      'children': [],
                      'identifier': 'W_394'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210173,
                      'categoryName': 'Egyéb termény feldolgozás',
                      'children': [],
                      'identifier': 'W_395'
                    }
                  ],
                  'identifier': 'W_390'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25126,
                  'categoryName': 'Szárító berendezés',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210174,
                      'categoryName': 'Terményszárító',
                      'children': [],
                      'identifier': 'W_397'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210175,
                      'categoryName': 'Szemestermény',
                      'children': [],
                      'identifier': 'W_398'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210176,
                      'categoryName': 'Szálastakarmány',
                      'children': [],
                      'identifier': 'W_399'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210177,
                      'categoryName': 'Burgonya szárító',
                      'children': [],
                      'identifier': 'W_400'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210178,
                      'categoryName': 'Zöldség, gyümölcs',
                      'children': [],
                      'identifier': 'W_401'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210179,
                      'categoryName': 'Dohányszárító',
                      'children': [],
                      'identifier': 'W_402'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210180,
                      'categoryName': 'Fűszer, gyógynövény',
                      'children': [],
                      'identifier': 'W_403'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210181,
                      'categoryName': 'Egyéb terményszárító',
                      'children': [],
                      'identifier': 'W_404'
                    }
                  ],
                  'identifier': 'W_396'
                }
              ],
              'identifier': 'W_378'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25127,
              'categoryName': 'Növénytárolási gép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25128,
                  'categoryName': 'Tároló létesítmény, gépek',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210182,
                      'categoryName': 'Szemestermény - tárolás',
                      'children': [],
                      'identifier': 'W_407'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210183,
                      'categoryName': 'Szálastakarmány - tárolás',
                      'children': [],
                      'identifier': 'W_408'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210184,
                      'categoryName': 'Burgonyatárolás',
                      'children': [],
                      'identifier': 'W_409'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210185,
                      'categoryName': 'Zöldség - gyümölcstárolás',
                      'children': [],
                      'identifier': 'W_410'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210186,
                      'categoryName': 'Tartály, tranzittartály',
                      'children': [],
                      'identifier': 'W_411'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210187,
                      'categoryName': 'Egyéb tartály',
                      'children': [],
                      'identifier': 'W_412'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210188,
                      'categoryName': 'Egyéb tároló gép',
                      'children': [],
                      'identifier': 'W_413'
                    }
                  ],
                  'identifier': 'W_406'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25129,
                  'categoryName': 'Takarmányelőkészítő gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210189,
                      'categoryName': 'Daráló, roppantó, aprító',
                      'children': [],
                      'identifier': 'W_415'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210190,
                      'categoryName': 'Keverő, prés',
                      'children': [],
                      'identifier': 'W_416'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210191,
                      'categoryName': 'Takarmányhűtő, morzsázó',
                      'children': [],
                      'identifier': 'W_417'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210192,
                      'categoryName': 'Takarmány előkészítő',
                      'children': [],
                      'identifier': 'W_418'
                    }
                  ],
                  'identifier': 'W_414'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25130,
                  'categoryName': 'Egyéb növénytermelési gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210193,
                      'categoryName': 'Kemikália kezelő, keverő',
                      'children': [],
                      'identifier': 'W_420'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210194,
                      'categoryName': 'Csávázógép',
                      'children': [],
                      'identifier': 'W_421'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210195,
                      'categoryName': 'Ködképző gép',
                      'children': [],
                      'identifier': 'W_422'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210196,
                      'categoryName': 'Egyéb stabil és kézigép',
                      'children': [],
                      'identifier': 'W_423'
                    }
                  ],
                  'identifier': 'W_419'
                }
              ],
              'identifier': 'W_405'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25131,
              'categoryName': 'Állattartási stabil gép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25132,
                  'categoryName': 'Itatás, takarmányozás gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210197,
                      'categoryName': 'Itatóberendezés',
                      'children': [],
                      'identifier': 'W_426'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210198,
                      'categoryName': 'Takarmánykiosztó gép',
                      'children': [],
                      'identifier': 'W_427'
                    }
                  ],
                  'identifier': 'W_425'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25133,
                  'categoryName': 'Fejés, tejkezelés gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210199,
                      'categoryName': 'Kisüzemi fejőberendezés',
                      'children': [],
                      'identifier': 'W_429'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210200,
                      'categoryName': 'Nagyüzemi fejőberendezés',
                      'children': [],
                      'identifier': 'W_430'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210201,
                      'categoryName': 'Fejőház rendszer',
                      'children': [],
                      'identifier': 'W_431'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210202,
                      'categoryName': 'Tejtartály',
                      'children': [],
                      'identifier': 'W_432'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210203,
                      'categoryName': 'Tejszivattyú',
                      'children': [],
                      'identifier': 'W_433'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210204,
                      'categoryName': 'Tejhűtő, hűtőtároló',
                      'children': [],
                      'identifier': 'W_434'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210205,
                      'categoryName': 'Fölöző, pasztőröző gép',
                      'children': [],
                      'identifier': 'W_435'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210206,
                      'categoryName': 'Egyéb fejő, tejkezelő gép',
                      'children': [],
                      'identifier': 'W_436'
                    }
                  ],
                  'identifier': 'W_428'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25134,
                  'categoryName': 'Marhatartás egyéb gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210207,
                      'categoryName': 'Trágyakezelés gépei',
                      'children': [],
                      'identifier': 'W_438'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210208,
                      'categoryName': 'Állásszerkezet és kellék',
                      'children': [],
                      'identifier': 'W_439'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210209,
                      'categoryName': 'Egyéb marhatartási gép',
                      'children': [],
                      'identifier': 'W_440'
                    }
                  ],
                  'identifier': 'W_437'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25135,
                  'categoryName': 'Sertéstartás egyéb gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210210,
                      'categoryName': 'Almostrágya kezelő gép',
                      'children': [],
                      'identifier': 'W_442'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210211,
                      'categoryName': 'Hígtrágya kezelő gép',
                      'children': [],
                      'identifier': 'W_443'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210212,
                      'categoryName': 'Kutrica, rekesz, padozat',
                      'children': [],
                      'identifier': 'W_444'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210213,
                      'categoryName': 'Egyéb sertéstartási gép',
                      'children': [],
                      'identifier': 'W_445'
                    }
                  ],
                  'identifier': 'W_441'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25136,
                  'categoryName': 'Baromfitartás egyéb gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210214,
                      'categoryName': 'Keltető, bújtató, műanya',
                      'children': [],
                      'identifier': 'W_447'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210215,
                      'categoryName': 'Ketrec (brojler, tojó)',
                      'children': [],
                      'identifier': 'W_448'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210216,
                      'categoryName': 'Egyéb baromfitartási gép',
                      'children': [],
                      'identifier': 'W_449'
                    }
                  ],
                  'identifier': 'W_446'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25137,
                  'categoryName': 'Juh, kecske és nyúltartás',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210217,
                      'categoryName': 'Nyúltartási gép, eszköz',
                      'children': [],
                      'identifier': 'W_451'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210218,
                      'categoryName': 'Juh -, kecsketartás gépei',
                      'children': [],
                      'identifier': 'W_452'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210219,
                      'categoryName': 'Villanypásztor',
                      'children': [],
                      'identifier': 'W_453'
                    }
                  ],
                  'identifier': 'W_450'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25138,
                  'categoryName': 'Egyéb állattartás gépei',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210220,
                      'categoryName': 'Méhészeti gép, berendezés',
                      'children': [],
                      'identifier': 'W_455'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210221,
                      'categoryName': 'Egyéb állat tartási gép',
                      'children': [],
                      'identifier': 'W_456'
                    }
                  ],
                  'identifier': 'W_454'
                }
              ],
              'identifier': 'W_424'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25139,
              'categoryName': 'Majori gép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25140,
                  'categoryName': 'Szivattyú',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210222,
                      'categoryName': 'Vízszivattyú, vízellátó',
                      'children': [],
                      'identifier': 'W_459'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210223,
                      'categoryName': 'Szennyvízszivattyú',
                      'children': [],
                      'identifier': 'W_460'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210224,
                      'categoryName': 'Egyéb szivattyú',
                      'children': [],
                      'identifier': 'W_461'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210225,
                      'categoryName': 'Szivattyú részegység',
                      'children': [],
                      'identifier': 'W_462'
                    }
                  ],
                  'identifier': 'W_458'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25141,
                  'categoryName': 'Tisztító, fertőtlenítő',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210226,
                      'categoryName': 'Nagynyomású mosó',
                      'children': [],
                      'identifier': 'W_464'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210227,
                      'categoryName': 'Forróvíz mosó, gőzborotva',
                      'children': [],
                      'identifier': 'W_465'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210228,
                      'categoryName': 'Seprőgép, porszívó',
                      'children': [],
                      'identifier': 'W_466'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210229,
                      'categoryName': 'Egyéb tisztító gép',
                      'children': [],
                      'identifier': 'W_467'
                    }
                  ],
                  'identifier': 'W_463'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25142,
                  'categoryName': 'Szellőzés, klíma gépei',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210230,
                      'categoryName': 'Szellőző ventillátor',
                      'children': [],
                      'identifier': 'W_469'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210231,
                      'categoryName': 'Ventillátor (központi)',
                      'children': [],
                      'identifier': 'W_470'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210232,
                      'categoryName': 'Zsalu, kürtő, légbeejtő',
                      'children': [],
                      'identifier': 'W_471'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210233,
                      'categoryName': 'Istállóhűtés berendezése',
                      'children': [],
                      'identifier': 'W_472'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210234,
                      'categoryName': 'Elektonikus vezérlő',
                      'children': [],
                      'identifier': 'W_473'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210235,
                      'categoryName': 'Egyéb légszabályozó',
                      'children': [],
                      'identifier': 'W_474'
                    }
                  ],
                  'identifier': 'W_468'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25143,
                  'categoryName': 'Tüzelés, léghevítés',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210236,
                      'categoryName': 'Kazán (Biomassza)',
                      'children': [],
                      'identifier': 'W_476'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210237,
                      'categoryName': 'Kazán (szén, gáz, olaj)',
                      'children': [],
                      'identifier': 'W_477'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210238,
                      'categoryName': 'Hőlégfúvó, léghevítő',
                      'children': [],
                      'identifier': 'W_478'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210239,
                      'categoryName': 'Gáz infrasugárzó',
                      'children': [],
                      'identifier': 'W_479'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210240,
                      'categoryName': 'Egyéb léghevítő',
                      'children': [],
                      'identifier': 'W_480'
                    }
                  ],
                  'identifier': 'W_475'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25144,
                  'categoryName': 'Mérleg',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210241,
                      'categoryName': 'Hídmérleg, járműmérleg',
                      'children': [],
                      'identifier': 'W_482'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210242,
                      'categoryName': 'Magtári, raktári mérleg',
                      'children': [],
                      'identifier': 'W_483'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210243,
                      'categoryName': 'Állatmérleg',
                      'children': [],
                      'identifier': 'W_484'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210244,
                      'categoryName': 'Egyéb mérleg',
                      'children': [],
                      'identifier': 'W_485'
                    }
                  ],
                  'identifier': 'W_481'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25145,
                  'categoryName': 'Garázs, műhelytechnika ',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210245,
                      'categoryName': 'Üzemanyagtárolás - kiadás',
                      'children': [],
                      'identifier': 'W_487'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210246,
                      'categoryName': 'Műhelyberendezés',
                      'children': [],
                      'identifier': 'W_488'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210247,
                      'categoryName': 'Mosó - tisztító gép',
                      'children': [],
                      'identifier': 'W_489'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210248,
                      'categoryName': 'Műszer, laboreszköz',
                      'children': [],
                      'identifier': 'W_490'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210249,
                      'categoryName': 'Csörlő, emelő, bak',
                      'children': [],
                      'identifier': 'W_491'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210250,
                      'categoryName': 'Szerelőpad, készülék',
                      'children': [],
                      'identifier': 'W_492'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210251,
                      'categoryName': 'Kéziszerszám készlet',
                      'children': [],
                      'identifier': 'W_493'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210252,
                      'categoryName': 'Egyéb műhelytechnika',
                      'children': [],
                      'identifier': 'W_494'
                    }
                  ],
                  'identifier': 'W_486'
                }
              ],
              'identifier': 'W_457'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25146,
              'categoryName': 'Erdészeti gép, berendezés',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25147,
                  'categoryName': 'Erdészeti erőgép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210253,
                      'categoryName': 'Erdészeti traktor',
                      'children': [],
                      'identifier': 'W_497'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210254,
                      'categoryName': 'Erdészeti rakodó közelítő',
                      'children': [],
                      'identifier': 'W_498'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210255,
                      'categoryName': 'Egyéb erdészeti magajáró',
                      'children': [],
                      'identifier': 'W_499'
                    }
                  ],
                  'identifier': 'W_496'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25148,
                  'categoryName': 'Erőgép erdészeti munkagép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210256,
                      'categoryName': 'Talajművelő gép (erdő)',
                      'children': [],
                      'identifier': 'W_501'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210257,
                      'categoryName': 'Vető, ültető gép (erdő)',
                      'children': [],
                      'identifier': 'W_502'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210258,
                      'categoryName': 'Növényvédő gép (erdő)',
                      'children': [],
                      'identifier': 'W_503'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210259,
                      'categoryName': 'Tápanyag kijuttató (erdő)',
                      'children': [],
                      'identifier': 'W_504'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210260,
                      'categoryName': 'Kombinált fakitermelő',
                      'children': [],
                      'identifier': 'W_505'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210261,
                      'categoryName': 'Álló, vegyes munka (erdő)',
                      'children': [],
                      'identifier': 'W_506'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210262,
                      'categoryName': 'Szállító jármű (erdő)',
                      'children': [],
                      'identifier': 'W_507'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210263,
                      'categoryName': 'Szalagfűrész',
                      'children': [],
                      'identifier': 'W_508'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210264,
                      'categoryName': 'Hasítógép',
                      'children': [],
                      'identifier': 'W_509'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210265,
                      'categoryName': 'Tolólap, művelő',
                      'children': [],
                      'identifier': 'W_510'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210266,
                      'categoryName': 'Aprító, szecskázógép',
                      'children': [],
                      'identifier': 'W_511'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210267,
                      'categoryName': 'Erdészeti szárzúzó',
                      'children': [],
                      'identifier': 'W_512'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210268,
                      'categoryName': 'Motoros fűrész',
                      'children': [],
                      'identifier': 'W_513'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210269,
                      'categoryName': 'Aljnövényzet tisztító',
                      'children': [],
                      'identifier': 'W_514'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210270,
                      'categoryName': 'Egyéb erdészeti munkagép',
                      'children': [],
                      'identifier': 'W_515'
                    }
                  ],
                  'identifier': 'W_500'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25149,
                  'categoryName': 'Erdészeti stabil gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210271,
                      'categoryName': 'Erdei termék feldolgozás',
                      'children': [],
                      'identifier': 'W_517'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210272,
                      'categoryName': 'Elsődleges fafeldolgozás',
                      'children': [],
                      'identifier': 'W_518'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210273,
                      'categoryName': 'Vadgazdálkodás',
                      'children': [],
                      'identifier': 'W_519'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210274,
                      'categoryName': 'Egyéb gép',
                      'children': [],
                      'identifier': 'W_520'
                    }
                  ],
                  'identifier': 'W_516'
                }
              ],
              'identifier': 'W_495'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25150,
              'categoryName': 'Háztáji gép, szerszám',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25151,
                  'categoryName': 'Motoros gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210275,
                      'categoryName': 'Kétkerekű traktor',
                      'children': [],
                      'identifier': 'W_523'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210276,
                      'categoryName': 'Rotációs kapa',
                      'children': [],
                      'identifier': 'W_524'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210277,
                      'categoryName': 'Fűnyíró',
                      'children': [],
                      'identifier': 'W_525'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210278,
                      'categoryName': 'Permetező',
                      'children': [],
                      'identifier': 'W_526'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210279,
                      'categoryName': 'Szivattyú',
                      'children': [],
                      'identifier': 'W_527'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210280,
                      'categoryName': 'Kiegészítő, adapter',
                      'children': [],
                      'identifier': 'W_528'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210281,
                      'categoryName': 'Egyéb motoros gép',
                      'children': [],
                      'identifier': 'W_529'
                    }
                  ],
                  'identifier': 'W_522'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25152,
                  'categoryName': 'Elektromos gép',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210282,
                      'categoryName': 'Fűnyíró, szegélyvágó',
                      'children': [],
                      'identifier': 'W_531'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210283,
                      'categoryName': 'Szivattyú',
                      'children': [],
                      'identifier': 'W_532'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210284,
                      'categoryName': 'Permetező',
                      'children': [],
                      'identifier': 'W_533'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210285,
                      'categoryName': 'Egyéb elektromos gép',
                      'children': [],
                      'identifier': 'W_534'
                    }
                  ],
                  'identifier': 'W_530'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25153,
                  'categoryName': 'Kézi szerszám, eszköz',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210286,
                      'categoryName': 'Metszőállvány, létra',
                      'children': [],
                      'identifier': 'W_536'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210287,
                      'categoryName': 'Ásó, kapa, lapát',
                      'children': [],
                      'identifier': 'W_537'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210288,
                      'categoryName': 'Permetező, vegyszerező',
                      'children': [],
                      'identifier': 'W_538'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210289,
                      'categoryName': 'Villa, gereblye',
                      'children': [],
                      'identifier': 'W_539'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210290,
                      'categoryName': 'Kasza, sarló',
                      'children': [],
                      'identifier': 'W_540'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210291,
                      'categoryName': 'Munka - és védőruha',
                      'children': [],
                      'identifier': 'W_541'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210292,
                      'categoryName': 'Olló, fűrész',
                      'children': [],
                      'identifier': 'W_542'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210293,
                      'categoryName': 'Egyéb eszköz',
                      'children': [],
                      'identifier': 'W_543'
                    }
                  ],
                  'identifier': 'W_535'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25154,
                  'categoryName': 'Etető, Itató',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210294,
                      'categoryName': 'Vályú',
                      'children': [],
                      'identifier': 'W_545'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210295,
                      'categoryName': 'Önitató',
                      'children': [],
                      'identifier': 'W_546'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210296,
                      'categoryName': 'Egyéb etető, itató',
                      'children': [],
                      'identifier': 'W_547'
                    }
                  ],
                  'identifier': 'W_544'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25155,
                  'categoryName': 'Takarmány - előkészítő',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210297,
                      'categoryName': 'Daráló, aprító',
                      'children': [],
                      'identifier': 'W_549'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210298,
                      'categoryName': 'Szecskavágó',
                      'children': [],
                      'identifier': 'W_550'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210299,
                      'categoryName': 'Takarmánykeverő',
                      'children': [],
                      'identifier': 'W_551'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210300,
                      'categoryName': 'Egyéb előkészítő',
                      'children': [],
                      'identifier': 'W_552'
                    }
                  ],
                  'identifier': 'W_548'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25156,
                  'categoryName': 'Istálló berendezés',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210301,
                      'categoryName': 'Szellőző',
                      'children': [],
                      'identifier': 'W_554'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210302,
                      'categoryName': 'Műanya',
                      'children': [],
                      'identifier': 'W_555'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210303,
                      'categoryName': 'Egyéb istállóberendezés',
                      'children': [],
                      'identifier': 'W_556'
                    }
                  ],
                  'identifier': 'W_553'
                }
              ],
              'identifier': 'W_521'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 25157,
              'categoryName': 'Kertészeti és egyéb gép',
              'children': [
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25158,
                  'categoryName': 'Gyümölcstermesztés gépei',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210304,
                      'categoryName': 'Pálinkafőző (lepárló)',
                      'children': [],
                      'identifier': 'W_559'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210305,
                      'categoryName': 'Egyéb gép és kellék',
                      'children': [],
                      'identifier': 'W_560'
                    }
                  ],
                  'identifier': 'W_558'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25159,
                  'categoryName': 'Zöldségtermesztés gépei',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210306,
                      'categoryName': 'Egyéb gép és kellék',
                      'children': [],
                      'identifier': 'W_562'
                    }
                  ],
                  'identifier': 'W_561'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25160,
                  'categoryName': 'Dísznövény termesztés gépei',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210307,
                      'categoryName': 'Cserepező, konténerező',
                      'children': [],
                      'identifier': 'W_564'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210308,
                      'categoryName': 'Bálabontó',
                      'children': [],
                      'identifier': 'W_565'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210309,
                      'categoryName': 'Tálcatöltő',
                      'children': [],
                      'identifier': 'W_566'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210310,
                      'categoryName': 'Gőzölő, talajfertőtlenítő',
                      'children': [],
                      'identifier': 'W_567'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210311,
                      'categoryName': 'Virágkötöző',
                      'children': [],
                      'identifier': 'W_568'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210312,
                      'categoryName': 'Termesztőasztal',
                      'children': [],
                      'identifier': 'W_569'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210313,
                      'categoryName': 'Tuskómaró',
                      'children': [],
                      'identifier': 'W_570'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210314,
                      'categoryName': 'Egyéb gép és kellék',
                      'children': [],
                      'identifier': 'W_571'
                    }
                  ],
                  'identifier': 'W_563'
                },
                {
                  'isActive': true,
                  'isMainCategory': true,
                  'hasNotExpiredOffer': false,
                  'categoryId': 25161,
                  'categoryName': 'Gyepgondozás gépei',
                  'children': [
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210315,
                      'categoryName': 'Fűnyíró',
                      'children': [],
                      'identifier': 'W_573'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210316,
                      'categoryName': 'Gyepszellőztető',
                      'children': [],
                      'identifier': 'W_574'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210317,
                      'categoryName': 'Szegélyvágó',
                      'children': [],
                      'identifier': 'W_575'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210318,
                      'categoryName': 'Damilos fűkasza',
                      'children': [],
                      'identifier': 'W_576'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210319,
                      'categoryName': 'Greenvágó',
                      'children': [],
                      'identifier': 'W_577'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210320,
                      'categoryName': 'Gyepfelszedő',
                      'children': [],
                      'identifier': 'W_578'
                    },
                    {
                      'isActive': true,
                      'isMainCategory': false,
                      'hasNotExpiredOffer': false,
                      'categoryId': 210321,
                      'categoryName': 'Egyéb gép és kellék',
                      'children': [],
                      'identifier': 'W_579'
                    }
                  ],
                  'identifier': 'W_572'
                }
              ],
              'identifier': 'W_557'
            }
          ],
          'identifier': 'W_100'
        },
        {
          'isActive': true,
          'isMainCategory': true,
          'hasNotExpiredOffer': false,
          'categoryId': 25162,
          'categoryName': 'Eszközök / Egyéb',
          'children': [
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210323,
              'categoryName': 'Karácsonyfa csomagoló',
              'children': [],
              'identifier': 'W_582'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210324,
              'categoryName': 'Láda',
              'children': [],
              'identifier': 'W_583'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210325,
              'categoryName': 'Csomagolóanyag',
              'children': [],
              'identifier': 'W_584'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210326,
              'categoryName': 'Karó, támaszték',
              'children': [],
              'identifier': 'W_585'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210327,
              'categoryName': 'Zsák, juta, konitex',
              'children': [],
              'identifier': 'W_586'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210328,
              'categoryName': 'Drót, geotextil, fólia',
              'children': [],
              'identifier': 'W_587'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210329,
              'categoryName': 'Drótkosár földlabdához',
              'children': [],
              'identifier': 'W_588'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210330,
              'categoryName': 'Etikett',
              'children': [],
              'identifier': 'W_589'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210331,
              'categoryName': 'Törzsvédő',
              'children': [],
              'identifier': 'W_590'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210332,
              'categoryName': 'Gyomtakaró',
              'children': [],
              'identifier': 'W_591'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210333,
              'categoryName': 'Árnyékoló',
              'children': [],
              'identifier': 'W_592'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210334,
              'categoryName': 'Oltó, szemző anyag',
              'children': [],
              'identifier': 'W_593'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210335,
              'categoryName': 'Szerszám',
              'children': [],
              'identifier': 'W_594'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210336,
              'categoryName': 'Kézi permetező',
              'children': [],
              'identifier': 'W_595'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210337,
              'categoryName': 'Neveléshez anyag',
              'children': [],
              'identifier': 'W_596'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210338,
              'categoryName': 'CC kocsi',
              'children': [],
              'identifier': 'W_597'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210339,
              'categoryName': 'Csapda, feromon',
              'children': [],
              'identifier': 'W_598'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210340,
              'categoryName': 'Gyeprács',
              'children': [],
              'identifier': 'W_599'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210341,
              'categoryName': 'Vakondháló',
              'children': [],
              'identifier': 'W_600'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210342,
              'categoryName': 'Gyepszegély',
              'children': [],
              'identifier': 'W_601'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210343,
              'categoryName': 'Üvegház, fóliasátor',
              'children': [],
              'identifier': 'W_602'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210344,
              'categoryName': 'Nevelőedény',
              'children': [],
              'identifier': 'W_603'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210345,
              'categoryName': 'Kenő, üzemanyag',
              'children': [],
              'identifier': 'W_604'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210346,
              'categoryName': 'Munkavédelem, munkaruha',
              'children': [],
              'identifier': 'W_605'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210347,
              'categoryName': 'Egyéb',
              'children': [],
              'identifier': 'W_606'
            }
          ],
          'identifier': 'W_581'
        },
        {
          'isActive': true,
          'isMainCategory': true,
          'hasNotExpiredOffer': false,
          'categoryId': 25163,
          'categoryName': 'Alkatrész',
          'children': [
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210348,
              'categoryName': 'Szíj, szíjtárcsa',
              'children': [],
              'identifier': 'W_608'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210349,
              'categoryName': 'Lánc, lánckerék',
              'children': [],
              'identifier': 'W_609'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210350,
              'categoryName': 'Kardán, hajlékony tengely',
              'children': [],
              'identifier': 'W_610'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210351,
              'categoryName': 'Hidraulikai elem',
              'children': [],
              'identifier': 'W_611'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210352,
              'categoryName': 'Gördülő csapágy',
              'children': [],
              'identifier': 'W_612'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210353,
              'categoryName': 'Beálló -, spec. csapágy',
              'children': [],
              'identifier': 'W_613'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210354,
              'categoryName': 'Persely, csukló',
              'children': [],
              'identifier': 'W_614'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210355,
              'categoryName': 'Szűrő (olaj, levegő)',
              'children': [],
              'identifier': 'W_615'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210356,
              'categoryName': 'Tömítés, simering',
              'children': [],
              'identifier': 'W_616'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210357,
              'categoryName': 'Tárcsalap',
              'children': [],
              'identifier': 'W_617'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210358,
              'categoryName': 'Ekevas, eke alkatrész',
              'children': [],
              'identifier': 'W_618'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210359,
              'categoryName': 'Talajművelő kés, kapa',
              'children': [],
              'identifier': 'W_619'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210360,
              'categoryName': 'Kaszapenge, kés, kalapács',
              'children': [],
              'identifier': 'W_620'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210361,
              'categoryName': 'Villamossági termék',
              'children': [],
              'identifier': 'W_621'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210362,
              'categoryName': 'Permetező alkatrész',
              'children': [],
              'identifier': 'W_622'
            },
            {
              'isActive': true,
              'isMainCategory': true,
              'hasNotExpiredOffer': false,
              'categoryId': 210363,
              'categoryName': 'Egyéb alkatrész',
              'children': [],
              'identifier': 'W_623'
            }
          ],
          'identifier': 'W_607'
        }
      ],
      'identifier': null
    }
  ]
}

function getCategoryReferenceFromCategoryTree(
  categoryTree,
  categoryId
) {
  let selected

  if (categoryTree.categoryId === categoryId) {
    selected = categoryTree
  } else {
    categoryTree.children
      .some(child => {
        selected = child.categoryId === categoryId
          ? child
          : getCategoryReferenceFromCategoryTree(child, categoryId)

        return selected != null
      })
  }

  return selected
}


let categoryTree1 = getCategoryReferenceFromCategoryTree(mockWebsopJSON.categoryTreeElements[0], 210035)
console.log(210035, categoryTree1.categoryName === 'Folyadék, gáz injektáló')

let categoryTree2 = getCategoryReferenceFromCategoryTree(mockWebsopJSON.categoryTreeElements[0], 210327)
console.log(210327, categoryTree2.categoryName === 'Zsák, juta, konitex')

let categoryTree3 = getCategoryReferenceFromCategoryTree(mockWebsopJSON.categoryTreeElements[0], 210361)
console.log(210361, categoryTree3.categoryName === 'Villamossági termék')

let categoryTree4 = getCategoryReferenceFromCategoryTree(mockWebsopJSON.categoryTreeElements[0], 209877)
console.log(209877, categoryTree4.categoryName === 'Csonthéjas gyümölcs')
