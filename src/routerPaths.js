import RoutesAuthentication from "@/modules/account/authentication/views/router";
import RoutesCore from "@/modules/core/views/router";
import RoutesMacapa from "@/modules/macapa/views/router";
import RoutesVarejao from "@/modules/varejao/views/router";

export default [
    ...RoutesCore,
    ...RoutesAuthentication,
    ...RoutesMacapa,
    ...RoutesVarejao
];
