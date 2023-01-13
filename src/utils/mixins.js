import moment from "moment";

export const fromNowFilter = {
    filters: {
        fromNow(datetime) {
            if (!datetime) {
                return "-";
            }
            return moment(datetime).fromNow();
        },
    }
}

export const emptyImageFilter = {
    filters: {
        emptyImage(src) {
            return src || " https://fakeimg.pl/";
        },
    }
}