const url = "https://api.myjson.com/bins/1dvz20";

const vm = new Vue({
  el: '#app',
  data: {
    results: [
      {
        idIntervention: "5c5c460eee6ecc66f73cda7e",
        index: 0,
        Demandeur: {
          Nom: "Koch",
          Prenom: "Booth"
        },
        Societe: "XERONK",
        Email: "koch.booth@xeronk.me",
        numTel: "+1 (956) 524-3301",
        Adresse: "162 Burnett Street, Gila, Maine, 5781",
        Intervenant: {
          Nom: "Jacqueline Hines"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460ecd15aaedf885e375",
        index: 1,
        Demandeur: {
          Nom: "Charlotte",
          Prenom: "Wyatt"
        },
        Societe: "ATGEN",
        Email: "charlotte.wyatt@atgen.us",
        numTel: "+1 (992) 570-2975",
        Adresse: "108 Drew Street, Enlow, Kentucky, 982",
        Intervenant: {
          Nom: "Rosalie Sears"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460e50838e03d0a65495",
        index: 2,
        Demandeur: {
          Nom: "Lopez",
          Prenom: "Trujillo"
        },
        Societe: "GROK",
        Email: "lopez.trujillo@grok.biz",
        numTel: "+1 (815) 428-3774",
        Adresse: "468 Sackman Street, Jessie, Connecticut, 3662",
        Intervenant: {
          Nom: "Sue Carver"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e5fb310dddc195306",
        index: 3,
        Demandeur: {
          Nom: "Jeri",
          Prenom: "Murphy"
        },
        Societe: "DAYCORE",
        Email: "jeri.murphy@daycore.net",
        numTel: "+1 (926) 498-2734",
        Adresse: "933 Anna Court, Advance, Minnesota, 1955",
        Intervenant: {
          Nom: "Glenn Snider"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460e2922ee6389f74905",
        index: 4,
        Demandeur: {
          Nom: "Lynette",
          Prenom: "Cote"
        },
        Societe: "SULTRAXIN",
        Email: "lynette.cote@sultraxin.name",
        numTel: "+1 (842) 587-2951",
        Adresse: "382 Dahlgreen Place, Madaket, New Mexico, 8489",
        Intervenant: {
          Nom: "Amie Boyle"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e24f9528c5c4e463e",
        index: 5,
        Demandeur: {
          Nom: "Pittman",
          Prenom: "Carey"
        },
        Societe: "DIGIQUE",
        Email: "pittman.carey@digique.tv",
        numTel: "+1 (998) 441-2208",
        Adresse: "306 Sullivan Street, Clara, Utah, 1855",
        Intervenant: {
          Nom: "Vanessa Harrington"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460e5683fa88286f4800",
        index: 6,
        Demandeur: {
          Nom: "Oneil",
          Prenom: "Oconnor"
        },
        Societe: "GRONK",
        Email: "oneil.oconnor@gronk.ca",
        numTel: "+1 (874) 448-2329",
        Adresse: "163 Lee Avenue, Loveland, Colorado, 2013",
        Intervenant: {
          Nom: "Liza Bird"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460ea2d318e68dd0a5e8",
        index: 7,
        Demandeur: {
          Nom: "Dickson",
          Prenom: "Wynn"
        },
        Societe: "DIGIGENE",
        Email: "dickson.wynn@digigene.co.uk",
        numTel: "+1 (980) 447-2233",
        Adresse: "550 Overbaugh Place, Cartwright, Arizona, 1509",
        Intervenant: {
          Nom: "Dona Dennis"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460eed09683fa62232f7",
        index: 8,
        Demandeur: {
          Nom: "Alford",
          Prenom: "Burton"
        },
        Societe: "CALLFLEX",
        Email: "alford.burton@callflex.com",
        numTel: "+1 (929) 435-2172",
        Adresse: "257 Danforth Street, Torboy, Texas, 5368",
        Intervenant: {
          Nom: "Walter Gill"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460eff46468e5877d95e",
        index: 9,
        Demandeur: {
          Nom: "Herman",
          Prenom: "Beach"
        },
        Societe: "ZOLARITY",
        Email: "herman.beach@zolarity.biz",
        numTel: "+1 (857) 598-2707",
        Adresse: "111 Greenwood Avenue, Greenwich, Federated States Of Micronesia, 3887",
        Intervenant: {
          Nom: "Amy Clayton"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e5553f9d7b1cdbb26",
        index: 10,
        Demandeur: {
          Nom: "Madeline",
          Prenom: "Graves"
        },
        Societe: "UNEEQ",
        Email: "madeline.graves@uneeq.io",
        numTel: "+1 (861) 458-3896",
        Adresse: "919 Aurelia Court, Gloucester, Vermont, 3415",
        Intervenant: {
          Nom: "Roman Dodson"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460ead5aead56cc369f0",
        index: 11,
        Demandeur: {
          Nom: "Robles",
          Prenom: "Black"
        },
        Societe: "TWIGGERY",
        Email: "robles.black@twiggery.info",
        numTel: "+1 (846) 403-2808",
        Adresse: "774 Durland Place, Witmer, Michigan, 1951",
        Intervenant: {
          Nom: "Julie Gaines"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e84a8f7ceb434bfac",
        index: 12,
        Demandeur: {
          Nom: "Misty",
          Prenom: "Melendez"
        },
        Societe: "BITTOR",
        Email: "misty.melendez@bittor.me",
        numTel: "+1 (944) 590-3037",
        Adresse: "148 Bush Street, Mayfair, Louisiana, 4562",
        Intervenant: {
          Nom: "Summers Good"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460e6de12fab3bfad42b",
        index: 13,
        Demandeur: {
          Nom: "Simpson",
          Prenom: "Frost"
        },
        Societe: "CENTREXIN",
        Email: "simpson.frost@centrexin.us",
        numTel: "+1 (960) 594-2178",
        Adresse: "250 Balfour Place, Castleton, Northern Mariana Islands, 3594",
        Intervenant: {
          Nom: "Minerva Rhodes"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460e10b05867664548eb",
        index: 14,
        Demandeur: {
          Nom: "Krista",
          Prenom: "Colon"
        },
        Societe: "COLAIRE",
        Email: "krista.colon@colaire.biz",
        numTel: "+1 (969) 505-2284",
        Adresse: "175 Tennis Court, Elizaville, North Dakota, 2300",
        Intervenant: {
          Nom: "English Maldonado"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e815dd3026af19df0",
        index: 15,
        Demandeur: {
          Nom: "Sofia",
          Prenom: "Figueroa"
        },
        Societe: "PLAYCE",
        Email: "sofia.figueroa@playce.net",
        numTel: "+1 (851) 522-2746",
        Adresse: "634 Wythe Place, Kersey, New Hampshire, 3354",
        Intervenant: {
          Nom: "Carson Estes"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460e77b4b51842e9421d",
        index: 16,
        Demandeur: {
          Nom: "Lenora",
          Prenom: "Daugherty"
        },
        Societe: "PORTALIS",
        Email: "lenora.daugherty@portalis.name",
        numTel: "+1 (999) 414-3153",
        Adresse: "831 Bushwick Place, Dubois, Florida, 6580",
        Intervenant: {
          Nom: "Virgie Brock"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e6d14216d3b32bc46",
        index: 17,
        Demandeur: {
          Nom: "Aida",
          Prenom: "Horne"
        },
        Societe: "FLOTONIC",
        Email: "aida.horne@flotonic.tv",
        numTel: "+1 (848) 438-3845",
        Adresse: "854 Fleet Place, Chalfant, Idaho, 2980",
        Intervenant: {
          Nom: "Drake Farrell"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460efea2974faa891b05",
        index: 18,
        Demandeur: {
          Nom: "Hudson",
          Prenom: "Hensley"
        },
        Societe: "OBLIQ",
        Email: "hudson.hensley@obliq.ca",
        numTel: "+1 (819) 517-2246",
        Adresse: "161 Sandford Street, Chautauqua, Marshall Islands, 8704",
        Intervenant: {
          Nom: "Alvarado Nolan"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e189e54d0c4cb19dc",
        index: 19,
        Demandeur: {
          Nom: "Leonor",
          Prenom: "Lewis"
        },
        Societe: "PIGZART",
        Email: "leonor.lewis@pigzart.co.uk",
        numTel: "+1 (820) 580-3673",
        Adresse: "256 Ash Street, Stewart, Indiana, 6530",
        Intervenant: {
          Nom: "Marguerite Marsh"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e6b7acbb13877d505",
        index: 20,
        Demandeur: {
          Nom: "Sharron",
          Prenom: "Potter"
        },
        Societe: "HAIRPORT",
        Email: "sharron.potter@hairport.com",
        numTel: "+1 (874) 435-2784",
        Adresse: "813 Clifton Place, Northchase, South Dakota, 7152",
        Intervenant: {
          Nom: "Marjorie Lyons"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e4310c91b9877a708",
        index: 21,
        Demandeur: {
          Nom: "Victoria",
          Prenom: "Zamora"
        },
        Societe: "MAZUDA",
        Email: "victoria.zamora@mazuda.biz",
        numTel: "+1 (868) 502-2815",
        Adresse: "732 Bushwick Avenue, Woodburn, Tennessee, 4215",
        Intervenant: {
          Nom: "Staci Wallace"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      },
      {
        idIntervention: "5c5c460e275445810ca00a88",
        index: 22,
        Demandeur: {
          Nom: "Charity",
          Prenom: "Benton"
        },
        Societe: "REALMO",
        Email: "charity.benton@realmo.io",
        numTel: "+1 (969) 585-2449",
        Adresse: "261 Canarsie Road, Oneida, California, 8516",
        Intervenant: {
          Nom: "Terrell Lowery"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: false 
      },
      {
        idIntervention: "5c5c460e50622a6befaa62f4",
        index: 23,
        Demandeur: {
          Nom: "Sharon",
          Prenom: "Kelly"
        },
        Societe: "STREZZO",
        Email: "sharon.kelly@strezzo.info",
        numTel: "+1 (908) 593-3634",
        Adresse: "563 Raleigh Place, Devon, District Of Columbia, 4826",
        Intervenant: {
          Nom: "Loraine Osborne"
        },
        Rapport: "Rapport Détaillé...",
        isSigned: true 
      }
    ],
    counter : 24,
    index : 23
  },
  
  methods:{
   addTableRow: function () {
    this.counter++;
    this.results.push({ idIntervention: '',index: this.index + 1, Demandeur : {Nom:'', Prenom:''},Societe:'',Email:'',numTel:'', Adresse:'', Intervenant: {Nom:''},Rapport:'',isSigned:'' });
  },
    deleteTableRow: function (idx) { 
      this.counter--;
      this.results.splice(idx, 1);      
   }
	}
});