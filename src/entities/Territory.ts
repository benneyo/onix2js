import {
  RegionBasedOnIso_3166_2Enum,
  RegionBasedOnIso_3166_2,
} from "../codelists/RegionBasedOnIso_3166_2";
import {
  CountryBasedOnIso_3166_1,
  CountryBasedOnIso_3166_1Enum
} from "../codelists/CountryBasedOnIso_3166_1";

import { parseType, parseStringToArray } from "../utils/parse";

export class Territory {
  constructor(json: any) {
    this.regionsIncluded = parseType(
      json,
      "RegionsIncluded",
      RegionBasedOnIso_3166_2
    );
    this.countriesIncluded = parseStringToArray(
      json,
      "CountriesIncluded",
      CountryBasedOnIso_3166_1
    );
  }

  regionsIncluded: RegionBasedOnIso_3166_2Enum;
  countriesIncluded: CountryBasedOnIso_3166_1Enum[];
}

//     <Territory>
//       <RegionsIncluded>WORLD</RegionsIncluded>
//       <CountriesIncluded>US CA</CountriesIncluded>
//     </Territory>
