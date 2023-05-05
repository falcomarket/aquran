export enum ActionsTypes{
    "GET_ALL_SURAHS"="[Surah] Get All Surahs",
    "GET_ALL_AYAHS"="[Ayah] Get All Ayahs",
    "SEARCH_ALL_AYAHS"="[Ayah] Search All Ayahs",
    "GET_ALL_LAFDS"="[LafdAya] Get All Lafds", 
    "GET_NASS_SURAH"="[Surah] Get Nass Surah",
    "GET_INDEX_QURAN"="[Quran] Get Index Quran",
    "SEARCH_AYAHS_BYCONTENT"="[Ayah] Search All Ayahs By Content",
    "GET_ALL_LAFDS_BY_HARF"="[Lafdq] Get ALL Lafd By HARF"
}

export interface ActionEvent {
    type:ActionsTypes,
    payload?:any,

}

export interface Harf{
idharf:number;
nomharf:string;

}

