

export class Country{
    private name : string;
    private capital : string;
    private region : string;
    private subRegion : string;
    private population : number;
    private topLevelDomain : string[];
    private language : string[];
    private callingCodes : string[];


    constructor(builder : CountryBuilder){
        this.name = builder.getName();
        this.capital = builder.getCapital();
        this.region = builder.getRegion();
        this.subRegion = builder.getSubRegion();
        this.population = builder.getPopulation();
        this.language = builder.getLanguage();
        this.callingCodes = builder.getCallingCodes();
        this.topLevelDomain = builder.getTopLevelDomain();
    }


    get Name(){
        return this.name;
    }

    get Capital(){
        return this.capital;
    }

    get Region(){
        return this.region;
    }

    get SubRegion(){
        return this.subRegion;
    }

    get Population(){
        return this.population;
    }

    get TopLevelDomain(){
        return this.topLevelDomain;
    }

    get Language(){
        return this.language;
    }

    get CallingCodes(){
        return this.callingCodes;
    }

}



export class CountryBuilder{
    private name : string;
    private capital : string;
    private region : string;
    private subRegion : string;
    private population : number;
    private topLevelDomain : string[];
    private language : string[];
    private callingCodes : string[];

    constructor(name : string){
        this.name=name;
    }

    getName(){
        return this.name;
    }

    setCapital(capital : string):CountryBuilder{
        this.capital = capital;
        return this;
    }

    getCapital(){
        return this.capital;
    }

    setRegion(region : string):CountryBuilder{
        this.region = region;
        return this;
    }

    getRegion(){
        return this.region;
    }

   setSubRegion(subRegion : string):CountryBuilder{
        this.subRegion = subRegion;
        return this;
    }

    getSubRegion(){
        return this.subRegion;
    }

   setPopulation(population: number):CountryBuilder{
        this.population = population;
        return this;
    }

    getPopulation(){
        return this.population;
    }

   setTopLevelDomain(tld : string[]):CountryBuilder{
        this.topLevelDomain = tld;
        return this;
    }

    getTopLevelDomain(){
        return this.topLevelDomain;
    }

   setLanguage(language : string[]):CountryBuilder{
        this.language = language;
        return this;
    }

    getLanguage(){
        return this.language;
    }

   setCallingCodes(codes : string[]):CountryBuilder{
        this.callingCodes = codes;
        return this;
    }

    getCallingCodes(){
        return this.callingCodes;
    }

    build() : Country{
        return new Country(this);
    }
}



