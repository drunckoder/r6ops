import {Item} from "@/model/Item";
import r6operators, {Operator} from "r6operators";
import {Operators} from "@/data/operators";

export class Repository {

    private static attackers: Item[] = [];
    private static defenders: Item[] = [];

    public static getAttackers(): Item[] {
        this.load(Operators.attackers, this.attackers);
        return this.attackers;
    }

    public static getDefenders(): Item[] {
        this.load(Operators.defenders, this.defenders);
        return this.defenders;
    }

    private static load(source: Item[], target: Item[]): void {
        if (target.length !== 0) {
            return;
        }

        for (const operator of source) {
            try {
                operator.icon = (r6operators as Record<string, Operator>)[operator.name.toLowerCase()].toSVG();
            } catch (e) {
                console.log(`Operator ${operator.name} not found`);
                console.log(e);
            }

            target.push(operator);
        }
    }
}