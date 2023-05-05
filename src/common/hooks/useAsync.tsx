import { AxiosResponse } from "axios";
import { useEffect } from "react";

export const useAsync = (
    asyncFn: () => Promise<AxiosResponse<any, any>>,
    successFn: Function,
    returnFn: Function,
    depedencies: any[] = []
    ) => {

    useEffect(() => {
        let isActive = true;

        asyncFn().then((result) => {
            if(isActive) successFn(result.data);
        });

        return () => {
            returnFn && returnFn();
            isActive = false;
        };
    }, depedencies);
};