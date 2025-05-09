import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY;
const DELIVERY_TOKEN = process.env.NEXT_PUBLIC_DELIVERY_TOKEN
const ENVIRONMENT = process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT;
const BASE_URL = process.env.NEXT_PUBLIC_CONTENTSTACK_URL;

const headers = {
    api_key: API_KEY,
    access_token: DELIVERY_TOKEN,
};

const initialState = {
    loading: true,
    homepageData: [],
    aboutpageData: [],
    servicepageData: [],
    usecasespageData: [],
    pricingpageData: [],
    blogpageData: [],
};

const homePageSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setHomePageData: (state, action) => {
            state.homepageData = action.payload;
        },
        setAboutPageData: (state, action) => {
            state.aboutpageData = action.payload;
        },
        setServicePageData: (state, action) => {
            state.servicepageData = action.payload;
        },
        setUseCasesPageData: (state, action) => {
            state.usecasespageData = action.payload;
        },
        setPricingPageData: (state, action) => {
            state.pricingpageData = action.payload;
        },
        setBlogPageData: (state, action) => {
            state.blogpageData = action.payload;
        },
    }
});

export const getHomePageData = createAsyncThunk('getHomePageData', (_, { dispatch }) => {
    axios.get(`${BASE_URL}/home_page/entries`, {
        headers,
        params: {
            environment: ENVIRONMENT,
        },
    }).then((response) => {
        if (response.status === 200) {
            dispatch(setHomePageData(response.data.entries));
        }
        else {
            dispatch(setHomePageData([]));
        }
        dispatch(setLoading(false));
    }).catch((error) => {
        dispatch(setHomePageData([]));
        dispatch(setLoading(false));
    });
});

export const getAboutPageData = createAsyncThunk('getAboutPageData', (_, { dispatch }) => {
    axios.get(`${BASE_URL}/about_page/entries`, {
        headers,
        params: {
            environment: ENVIRONMENT,
        },
    }).then((response) => {
        if (response.status === 200) {
            dispatch(setAboutPageData(response.data.entries));
        }
        else {
            dispatch(setAboutPageData([]));
        }
        dispatch(setLoading(false));
    }).catch((error) => {
        dispatch(setAboutPageData([]));
        dispatch(setLoading(false));
    });
});

export const getServicePageData = createAsyncThunk('getServicePageData', (_, { dispatch }) => {
    axios.get(`${BASE_URL}/services_page/entries`, {
        headers,
        params: {
            environment: ENVIRONMENT,
        },
    }).then((response) => {
        if (response.status === 200) {
            dispatch(setServicePageData(response.data.entries));
        }
        else {
            dispatch(setServicePageData([]));
        }
        dispatch(setLoading(false));
    }).catch((error) => {
        dispatch(setServicePageData([]));
        dispatch(setLoading(false));
    });
});

export const getUseCasesPageData = createAsyncThunk('getUseCasesPageData', (_, { dispatch }) => {
    axios.get(`${BASE_URL}/use_cases_page/entries`, {
        headers,
        params: {
            environment: ENVIRONMENT,
        },
    }).then((response) => {
        if (response.status === 200) {
            dispatch(setUseCasesPageData(response.data.entries));
        }
        else {
            dispatch(setUseCasesPageData([]));
        }
        dispatch(setLoading(false));
    }).catch((error) => {
        dispatch(setUseCasesPageData([]));
        dispatch(setLoading(false));
    });
});

export const getPricingPageData = createAsyncThunk('getPricingPageData', (_, { dispatch }) => {
    axios.get(`${BASE_URL}/pricing_page/entries`, {
        headers,
        params: {
            environment: ENVIRONMENT,
        },
    }).then((response) => {
        if (response.status === 200) {
            dispatch(setPricingPageData(response.data.entries));
        }
        else {
            dispatch(setPricingPageData([]));
        }
        dispatch(setLoading(false));
    }).catch((error) => {
        dispatch(setPricingPageData([]));
        dispatch(setLoading(false));
    });
});

export const getBlogPageData = createAsyncThunk('getBlogPageData', (_, { dispatch }) => {
    axios.get(`${BASE_URL}/blog_page/entries`, {
        headers,
        params: {
            environment: ENVIRONMENT,
        },
    }).then((response) => {
        if (response.status === 200) {
            dispatch(setBlogPageData(response.data.entries));
        }
        else {
            dispatch(setBlogPageData([]));
        }
        dispatch(setLoading(false));
    }).catch((error) => {
        dispatch(setBlogPageData([]));
        dispatch(setLoading(false));
    });
});

export const { setLoading, setHomePageData, setAboutPageData, setBlogPageData, setServicePageData, setUseCasesPageData, setPricingPageData } = homePageSlice.actions;

export default homePageSlice.reducer;
