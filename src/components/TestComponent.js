import m from "mithril";

export default function TestComponent() {
    let colorChoice = "white";

    function pickRandomColor() {
        let    choices = ["white", "grey", "green", "red", "yellow", "blue", "orange"];
        return choices[Math.floor(Math.random() * choices.length)]
    }

    return {
        view() {
            return m("div", { style: { backgroundColor: colorChoice } }, [
                m("h1", colorChoice),
                m("button", { onclick: () => { colorChoice = pickRandomColor() } }, "Randomize Color!"),
            ])
        }
    }
}
