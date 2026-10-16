dataSetVersion = "2026-10-16";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Verses",
    key: "verses",
    tooltip: "Check this to restrict to certain verses.",
    checked: false,
    sub: [
      { name: "Interbellum", key: "IB" },
      { name: "Potterverse", key: "WW" },
      { name: "Wonderverse", key: "WV" },
      { name: "Gnosverse", key: "GV" },
      { name: "Idolverse", key: "IV" },
      { name: "Kingsman AU", key: "KV" },
    ]
  },
  {
    name: "Filter Non-Female",
    key: "notfemale",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Filter Non-Male",
    key: "notmale",
    tooltip: "Check this to remove all non-male characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Asha",
    img: "01asha.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notfemale: true 
    }
  },
  {
    name: "Mish",
    img: "02mish.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notfemale: true 
    }
  },
  {
    name: "Arci",
    img: "03arci.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notfemale: true 
    }
  },
  {
    name: "Tilla",
    img: "04tilla.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notfemale: true 
    }
  },
  {
    name: "Adel",
    img: "05adel.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Boya",
    img: "06boya.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notfemale: true 
    }
  },
  {
    name: "Mari",
    img: "07mari.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Feli",
    img: "08feli.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Zhyr",
    img: "09zhyr.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Tedi",
    img: "10tedi.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notfemale: true 
    }
  },
  {
    name: "Char",
    img: "11char.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notmale: true 
    }
  },
  {
    name: "Mur",
    img: "12mur.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notmale: true 
    }
  },
  {
    name: "Kay",
    img: "13kay.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Bay",
    img: "14bay.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notfemale: true 
    }
  },
  {
    name: "Neng",
    img: "15neng.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Yos",
    img: "16yos.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notfemale: true 
    }
  },
  {
    name: "Franc",
    img: "17franc.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notfemale: true 
    }
  },
  {
    name: "Sen",
    img: "18sen.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notfemale: true 
    }
  },
  {
    name: "Darus",
    img: "19darus.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notfemale: true 
    }
  },
  {
    name: "Yom",
    img: "20yom.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Eva",
    img: "21eva.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Pili",
    img: "22pili.png",
    opts: {
      verses: ["IB", "WW", "GV"],
      notmale: true 
    }
  },
  {
    name: "Naya",
    img: "23naya.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notmale: true 
    }
  },
  {
    name: "Klo",
    img: "24klo.png",
    opts: {
      verses: ["IB", "WW", "WV", "GV", "IV", "KV"],
      notmale: true 
    }
  }
];
