import { GlobalActions, storeCertification, storeSearchedCertification } from "../actions";
import { getType } from "typesafe-actions";

export type GlobalState = Readonly<{
    certifications: CertificationsType,
    searchedCertifications: CertificationsType,
}>;

export type CertificationsType = ReadonlyArray<{
    id: string,
    data: any
}>;

const initialState: GlobalState = {
    certifications: [],
    searchedCertifications: []
};

// Selector
export const certificationSelector = (state: GlobalState) => state.certifications;

export const searchedCertificationsSelector = (state: GlobalState) => state.searchedCertifications

//Reducer

const reducer = (
    state: GlobalState = initialState, 
    action: GlobalActions
): GlobalState => {
    switch(action.type) {
        case getType(storeCertification): {
            const prevState = {...state};
            return  {...state, 
                certifications: prevState.certifications.concat(action.payload)
            }
        }

        case getType(storeSearchedCertification): {
            const prevState = {...state};
            return  {...state, 
                searchedCertifications: prevState.searchedCertifications.concat(action.payload)
            }
        }

        default:
            return {...state};
    }
}

export default reducer;


