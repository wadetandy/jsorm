"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COLORS = {
    green: [32, 39],
    cyan: [36, 39],
    magenta: [35, 39],
    bold: [1, 22],
};
function colorize(color, text) {
    if (supportsColor()) {
        var map = COLORS[color];
        return "\u001B[" + map[0] + "m" + text + "\u001B[" + map[1] + "m";
    }
    else {
        return text;
    }
}
exports.default = colorize;
function supportsColor() {
    if (typeof window === undefined) {
        if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC9jb2xvcml6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sTUFBTSxHQUFHO0lBQ2IsS0FBSyxFQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNqQixJQUFJLEVBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDakIsSUFBSSxFQUFLLENBQUMsQ0FBQyxFQUFHLEVBQUUsQ0FBQztDQUNsQixDQUFBO0FBRUQsa0JBQWlDLEtBQWMsRUFBRSxJQUFZO0lBQzNELEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLFlBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFJLElBQUksZUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztJQUNyRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUM7QUFQRCwyQkFPQztBQUVEO0lBQ0UsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxnREFBZ0QsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDSCxDQUFDIn0=