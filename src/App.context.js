import { createContext, useState, useEffect } from "react";
import { dataMahsulotlar } from "./bekendData/mahsulotlar";
import { toast } from "react-toastify";

export const useAppContext = () => {
  const [mahsulotlar, setMahsulotlar] = useState(
    JSON.parse(localStorage.getItem("mahsulotlar")) || dataMahsulotlar
  );
  const [korilganMahsulotlar, setKorilganMahsulotlar] = useState([]);

  const [kiritilganText, setKiritilganText] = useState("")
  const [savatchaOchiqmi, setSavatchaOchiqmi] = useState(false);

  useEffect(() => {
    localStorage.setItem("mahsulotlar", JSON.stringify(mahsulotlar));
  }, [mahsulotlar]);

  // nimadur yangi logika qo'shildi, bolib tolash

  const savatchaAlmashtirish = () => {
    setSavatchaOchiqmi(!savatchaOchiqmi);
  };
  const mahsulotlarniIzlash = (izlanayotganText) => {
    if (izlanayotganText) {
      setKiritilganText(izlanayotganText);

    } else {
      setKiritilganText("");
    }
  };
  const mahsulotTanlash = (tanlanganMahsulot) => {
    if (tanlanganMahsulot.tanlanganmi === false) {
      toast.success(
        `Yangi mahsulot qo'shildi! ${tanlanganMahsulot.nomi}: ${tanlanganMahsulot.narxi}`,
        {
          position: "bottom-right",
        }
      );
      const yangiMahsulotlar = mahsulotlar.map((mahsulot) => {
        if (mahsulot.nomi === tanlanganMahsulot.nomi) {
          return {
            ...mahsulot,
            tanlanganmi: true,
            soni: 1,
          };
        } else {
          return mahsulot;
        }
      });
      setMahsulotlar(yangiMahsulotlar);
    } else {
      toast.warn(
        `Ushbu mahsulot savatchadan olindi! ${tanlanganMahsulot.nomi}: ${tanlanganMahsulot.narxi}`,
        {
          position: "bottom-right",
        }
      );
      const yangiMahsulotlar = mahsulotlar.map((mahsulot) => {
        if (mahsulot.nomi === tanlanganMahsulot.nomi) {
          return {
            ...mahsulot,
            tanlanganmi: false,
            soni: 0,
          };
        } else {
          return mahsulot;
        }
      });
      setMahsulotlar(yangiMahsulotlar);
    }
  };
  const tanlanganmiClick = (tanlanganMahsulot) => {
    setMahsulotlar(
      mahsulotlar.map((mahsulot) => {
        if (mahsulot.nomi === tanlanganMahsulot.nomi) {
          return {
            ...mahsulot,
            yoqdimi: !mahsulot.yoqdimi,
          };
        } else {
          return mahsulot;
        }
      })
    );
  };
  const mahsulotniSavatchadanChiqarish = (chiqarmoqchiBolganMahsulot) => {
    setMahsulotlar(
      mahsulotlar.map((mahsulot) => {
        if (
          mahsulot.nomi === chiqarmoqchiBolganMahsulot.nomi &&
          mahsulot.soni
        ) {
          toast.error("Mahsulot olindi! ");
          return {
            ...mahsulot,
            tanlanganmi: false,
          };
        } else {
          return mahsulot;
        }
      })
    );
  };
  const onPlusClick = (soniOshayotganMahsulot) => {
    const yangiMaxsulotlar = mahsulotlar.map((mahsulot) => {
      if (mahsulot.nomi === soniOshayotganMahsulot.nomi) {
        return {
          ...mahsulot,
          soni: mahsulot.soni + 1,
        };
      } else {
        return mahsulot;
      }
    });
    setMahsulotlar(yangiMaxsulotlar);
  };
  const onMinusClick = (soniKamayayotganMahsulot) => {
    const yangiMaxsulotlar = mahsulotlar.map((mahsulot) => {
      if (
        mahsulot.nomi === soniKamayayotganMahsulot.nomi &&
        mahsulot.soni > 0
      ) {
        return {
          ...mahsulot,
          soni: mahsulot.soni - 1,
        };
      } else {
        return mahsulot;
      }
    });
    setMahsulotlar(yangiMaxsulotlar);
  };
  // obshiy summa
  let obshiySumma = 0;
  const tanlanganMahsulotlar = mahsulotlar.filter(
    (mahsulot) => mahsulot.tanlanganmi === true
  );
  for (let i = 0; i < tanlanganMahsulotlar.length; i++) {
    obshiySumma =
      obshiySumma +
      tanlanganMahsulotlar[i].narxi * tanlanganMahsulotlar[i].soni;
  }
  // mahsulotlar soni
  let mahsulotlarsoni = 0;
  const mahsulotsoni = mahsulotlar.filter(
    (mahsulot) => mahsulot.tanlanganmi === true
  );
  for (let i = 0; i < mahsulotsoni.length; i++) {
    mahsulotlarsoni = mahsulotlarsoni + mahsulotsoni[i].soni;
  }


  return {
    state: {
      mahsulotlar,
      savatchaOchiqmi,
      mahsulotlarsoni,
      obshiySumma,
      tanlanganMahsulotlar,
      korilganMahsulotlar,
      kiritilganText
    },
    action: {
      setMahsulotlar,
      setSavatchaOchiqmi,
      mahsulotlarniIzlash,
      savatchaAlmashtirish,
      mahsulotTanlash,
      tanlanganmiClick,
      onPlusClick,
      onMinusClick,
      mahsulotniSavatchadanChiqarish,
      setKorilganMahsulotlar,
    },
  };
};
const AppContext = createContext({ state: {}, action: {} });

export default AppContext;
