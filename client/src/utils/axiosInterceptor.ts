



// import axios, {
//   AxiosInstance,
//   AxiosResponse,
//   InternalAxiosRequestConfig,
//   AxiosError,
// } from "axios";
// import { store } from "../redux/app/store";
// import { setToken } from "../redux/features/authSlice";

// const API_URLS = {
//   user: import.meta.env.VITE_API_USER,
//   admin: import.meta.env.VITE_API_ADMIN,
//   counsellor: import.meta.env.VITE_API_COUNSELLOR,
// } as const;

// export type UserRole = keyof typeof API_URLS;

// let isRefreshing = false;
// let refreshSubscribers: ((token: string) => void)[] = [];

// const refreshAuthToken = async (role: UserRole): Promise<string | null> => {
//   try {
//     console.log(`Attempting to refresh token for role: ${role}`);
//     const response = await axios.post(
//       `${API_URLS[role]}/refresh-token`,
//       {},
//       {
//         withCredentials: true, // Ensure cookies are sent
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const newToken = response.data?.accessToken;
//     if (newToken) {
//       console.log("New token received:", newToken);
//       if (newToken !== store.getState().auth.token) {
//         store.dispatch(setToken({ token: newToken }));
//       }
//       refreshSubscribers.forEach((cb) => cb(newToken));
//       refreshSubscribers = [];
//       return newToken;
//     }
//   } catch (error: any) {
//     console.error("Refresh token error:", error.response?.data || error.message);
//     store.dispatch(setToken({ token: "" }));
//     window.location.href = `/${role}/signin`;
//   } finally {
//     isRefreshing = false;
//   }
//   return null;
// };

// const createAxiosInstance = (role: UserRole): AxiosInstance => {
//   const instance = axios.create({
//     baseURL: API_URLS[role],
//     timeout: 10000,
//     withCredentials: true, // Ensure cookies are sent for all requests
//   });

//   instance.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//       const token = store.getState().auth.token;
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   instance.interceptors.response.use(
//     (response: AxiosResponse) => response,
//     async (error: AxiosError) => {
//       const originalRequest = error.config as InternalAxiosRequestConfig & {
//         _retry?: boolean;
//       };

//       if (
//         !originalRequest ||
//         error.response?.status !== 401 ||
//         originalRequest._retry
//       ) {
//         return Promise.reject(error);
//       }

//       originalRequest._retry = true;

//       if (isRefreshing) {
//         return new Promise((resolve) => {
//           refreshSubscribers.push((token: string) => {
//             originalRequest.headers.Authorization = `Bearer ${token}`;
//             resolve(instance(originalRequest));
//           });
//         });
//       }

//       isRefreshing = true;
//       const newToken = await refreshAuthToken(role);

//       if (newToken) {
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return instance(originalRequest);
//       }

//       return Promise.reject(error);
//     }
//   );

//   return instance;
// };

// export const api = {
//   admin: createAxiosInstance("admin"),
//   counsellor: createAxiosInstance("counsellor"),
//   user: createAxiosInstance("user"),
// };





// import axios, {
//   AxiosInstance,
//   AxiosResponse,
//   InternalAxiosRequestConfig,
//   AxiosError,
// } from "axios";
// import { store } from "../redux/app/store";
// import { setToken } from "../redux/features/authSlice";

// const API_URLS = {
//   user: import.meta.env.VITE_API_USER,
//   admin: import.meta.env.VITE_API_ADMIN,
//   counsellor: import.meta.env.VITE_API_COUNSELLOR,
// } as const;

// export type UserRole = keyof typeof API_URLS;

// let isRefreshing = false;
// let refreshSubscribers: ((token: string) => void)[] = [];

// const refreshAuthToken = async (role: UserRole): Promise<string | null> => {
//   if (isRefreshing) {
//     return new Promise((resolve) => {
//       refreshSubscribers.push((token: string) => resolve(token));
//     });
//   }

//   isRefreshing = true;
//   try {
//     console.log(`Attempting to refresh token for role: ${role}`);
//     const response = await axios.post(
//       `${API_URLS[role]}/refresh-token`,
//       {},
//       {
//         baseURL: API_URLS[role],
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const newToken = response.data?.accessToken;
//     if (newToken) {
//       console.log("New token received:", newToken);
//       if (newToken !== store.getState().auth.token) {
//         store.dispatch(setToken({ token: newToken }));
//       }
//       refreshSubscribers.forEach((cb) => cb(newToken));
//       refreshSubscribers = [];
//       return newToken;
//     }
//   } catch (error: any) {
//     console.error("Refresh token error:", error.response?.data || error.message);
//     store.dispatch(setToken({ token: "" }));
//     window.location.href = `/${role}/signin`;
//   } finally {
//     isRefreshing = false;
//   }
//   return null;
// };

// const createAxiosInstance = (role: UserRole): AxiosInstance => {
//   const instance = axios.create({
//     baseURL: API_URLS[role],
//     timeout: 10000,
//     withCredentials: true,
//   });

//   instance.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//       const token = store.getState().auth.token;
//       console.log(`Request to ${config.url} with token: ${token ? "present" : "missing"}`);
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       console.error("Request interceptor error:", error);
//       return Promise.reject(error);
//     }
//   );

//   instance.interceptors.response.use(
//     (response: AxiosResponse) => response,
//     async (error: AxiosError) => {
//       const originalRequest = error.config as InternalAxiosRequestConfig & {
//         _retry?: boolean;
//       };

//       if (
//         !originalRequest ||
//         error.response?.status !== 401 ||
//         originalRequest._retry
//       ) {
//         console.error("Response error:", error.response?.data || error.message);
//         return Promise.reject(error);
//       }

//       originalRequest._retry = true;

//       const newToken = await refreshAuthToken(role);

//       if (newToken) {
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return instance(originalRequest);
//       }

//       return Promise.reject(error);
//     }
//   );

//   return instance;
// };

// export const api = {
//   admin: createAxiosInstance("admin"),
//   counsellor: createAxiosInstance("counsellor"),
//   user: createAxiosInstance("user"),
// };




import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import { store } from "../redux/app/store";
import { setToken } from "../redux/features/authSlice";

const API_URLS = {
  user: import.meta.env.VITE_API_USER,
  admin: import.meta.env.VITE_API_ADMIN,
  counsellor: import.meta.env.VITE_API_COUNSELLOR,
} as const;

export type UserRole = keyof typeof API_URLS;

// Keep track of refresh promises to avoid multiple simultaneous refresh attempts
const refreshPromises: Record<UserRole, Promise<string | null> | null> = {
  user: null,
  admin: null,
  counsellor: null,
};

const refreshAuthToken = async (role: UserRole): Promise<string | null> => {
  // If there's already a refresh in progress for this role, return that promise
  if (refreshPromises[role]) {
    return refreshPromises[role];
  }

  // Create and store the refresh promise
  refreshPromises[role] = (async () => {
    try {
      console.log(`Attempting to refresh token for role: ${role}`);
      
      const response = await axios.post(
        `${API_URLS[role]}/refresh-token`,
        {}, // Empty body
        {
          withCredentials: true, // This is crucial for sending cookies
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );

      const newToken = response.data?.accessToken;
      if (newToken) {
        console.log("New token received successfully");
        // Update the token in Redux store
        store.dispatch(setToken({ token: newToken }));
        return newToken;
      } else {
        console.error("No access token in refresh response");
        throw new Error("No access token received");
      }
    } catch (error: any) {
      console.error("Refresh token error:", error.response?.data || error.message);
      
      // Clear the token and redirect to login
      store.dispatch(setToken({ token: "" }));
      
      // Redirect to appropriate login page
      if (typeof window !== 'undefined') {
        window.location.href = `/${role}/signin`;
      }
      
      throw error;
    } finally {
      // Clear the promise so future requests can create a new one
      refreshPromises[role] = null;
    }
  })();

  return refreshPromises[role];
};

const createAxiosInstance = (role: UserRole): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_URLS[role],
    timeout: 10000,
    withCredentials: true, // Important for cookies
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = store.getState().auth.token;
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
    },
    (error) => {
      console.error("Request interceptor error:", error);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

      // Check if this is a 401 error and we haven't already tried to refresh
      if (
        error.response?.status === 401 &&
        originalRequest &&
        !originalRequest._retry &&
        !originalRequest.url?.includes('/refresh-token') // Don't retry refresh token requests
      ) {
        originalRequest._retry = true;

        try {
          const newToken = await refreshAuthToken(role);

          if (newToken) {
            // Update the authorization header and retry the request
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return instance(originalRequest);
          }
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          // The refreshAuthToken function already handles cleanup and redirect
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const api = {
  admin: createAxiosInstance("admin"),
  counsellor: createAxiosInstance("counsellor"),
  user: createAxiosInstance("user"),
};