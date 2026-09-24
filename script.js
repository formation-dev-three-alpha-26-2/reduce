let personnes = [
  {
    nom: { prenom: "Grace", deuxiemePrenom: "B.", nomFamille: "Hopper" },
    age: 85,
  },
  { nom: { prenom: "Adele", nomFamille: "Goldstine" }, age: 43 },
  { nom: { prenom: "Ada", nomFamille: "Lovelace" }, age: 36 },
  {
    nom: { prenom: "Hedy", deuxiemePrenom: "E.", nomFamille: "Lamarr" },
    age: 85,
  },
  { nom: { prenom: "Ruchi", nomFamille: "Sanghvi" }, age: 34 },
];

//ex1
function sommeAges(personnes) {
  return personnes.reduce((acc, element) => {
    return element.age + acc;
  }, 0);
}

//ex2
function ageMoyen(personnes) {
  return sommeAges(personnes) / personnes.length;
}
// ou bien
function ageMoyen(personnes) {
  let somme = personnes.reduce((acc, element) => {
    return element.age + acc;
  }, 0);
  return somme / personnes.length;
}
// ou bien
function ageMoyen(personnes) {
  return (
    personnes.reduce((acc, element) => {
      return element.age + acc;
    }, 0) / personnes.length
  );
}
//ex3

function intervalle(debut, fin) {
  var resultat = [];

  for (var i = debut; i < fin; i++) {
    resultat.push(i);
  }

  return resultat;
}

function factorielle(n) {
  let tab = intervalle(1, n + 1);

  return tab.reduce((acc, element) => {
    return acc * element;
  }, 1);
}

//ex4
function compterOccurrences(chaine, caractere) {
  let tab = chaine.split("");
  return tab.reduce((acc, element) => {
    if (element === caractere) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}
//ex5
function personneLaPlusAgee(personnes) {
  return personnes.reduce((acc, element) => {
    if (element.age > acc.age) {
      return element;
    } else {
      return acc;
    }
  });
}
//ex6
function compterParAge(personnes) {
  return personnes.reduce((acc, element) => {
    if (acc.hasOwnProperty(element.age)) {
      acc[element.age]++;
    } else {
      acc[element.age] = 1;
    }

    return acc;
  }, {});
}
// ou bien
function compterParAge(personnes) {
  return personnes.reduce((acc, element) => {
    if (element.age in acc) {
      acc[element.age]++;
    } else {
      acc[element.age] = 1;
    }

    return acc;
  }, {});
}
// ou bien

function compterParAge(personnes) {
  return personnes.reduce((acc, element) => {
    if (acc[element.age] === undefined) {
      acc[element.age] = 1;
    } else {
      acc[element.age]++;
    }

    return acc;
  }, {});
}

//ex7
function obtenirPrenoms(tab) {
  return tab.reduce((acc, element) => {
    acc.push(element.nom.prenom);
    return acc;
  }, []);
}

//ex8
function tousPlusDe30Ans(personnes) {
  return personnes.reduce((acc, element) => {
    return acc && element.age > 30;
  }, true);
}

//ex9
function totalLettresPrenoms(tab) {
  return tab.reduce((acc, element) => {
    return acc + element.nom.prenom.length;
  }, 0);
}

//ex10
function construireNomsComplets(personnes) {
  return personnes.reduce((acc, element, i) => {
    let x = element.nom.prenom + " " + element.nom.nomFamille;

    if (i === 0) {
      return x;
    }
    return acc + " ," + x;
  }, "");
}
