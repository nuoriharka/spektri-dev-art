class Tuotevastuuagentti {
  constructor(ideadokumentti) {
    this.ideadokumentti = ideadokumentti;
    this.muistipankki = new Muistipankki();
  }

  async luoTuotevaatimukset() {
    // 1. Tunnista ydinominaisuudet
    const ydinominaisuudet = this.analysoiYdinosat(this.ideadokumentti);
    
    // 2. Priorisoi MVP-toiminnot RICE-mallilla
    const priorisointi = this.priorisoiToiminnot(ydinominaisuudet);
    
    // 3. Luo tarkat käyttötapaukset
    const kayttotapaukset = this.muodostaKayttotapaukset(priorisointi);
    
    // 4. Tallenna päätökset muistipankkiin
    this.muistipankki.tallennaPaatokset({
      ydinominaisuudet,
      priorisointi,
      kayttotapaukset
    });
    
    return kayttotapaukset;
  }
}
