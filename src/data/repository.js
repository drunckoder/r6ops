import r6operators from "r6operators";
import { Operators } from "@/data/operators";
export class Repository {
    static attackers = [];
    static defenders = [];
    static getAttackers() {
        this.load(Operators.attackers, this.attackers);
        return this.attackers;
    }
    static getDefenders() {
        this.load(Operators.defenders, this.defenders);
        return this.defenders;
    }
    static load(source, target) {
        if (target.length !== 0) {
            return;
        }
        for (const operator of source) {
            try {
                operator.icon = r6operators[operator.name.toLowerCase()].toSVG();
            }
            catch (e) {
                console.log(`Operator ${operator.name} not found`);
                console.log(e);
            }
            target.push(operator);
        }
    }
}
//# sourceMappingURL=repository.js.map