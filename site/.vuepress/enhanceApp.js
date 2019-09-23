import format from "date-fns/format";
import parse from "date-fns/parse";
import pt from "date-fns/locale/pt";

export default ({ Vue }) => {
    Vue.filter('$formatDate', function formatDate(value) {
        return format(parse(value), "DD [de] MMMM [de] YYYY", { locale: pt });
    });
}