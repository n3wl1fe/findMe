import { DependencyList } from "react";

export type UseLocationProps = {
    deps?: DependencyList;
    errorCallback?: PositionErrorCallback | null;
};