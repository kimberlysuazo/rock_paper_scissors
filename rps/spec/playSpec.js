const {play} = require("../src/rps")

describe("Play ", function () {
    const ROCK= "rock"
    const PAPER = "paper"
    const SCISSORS = 'scissors'

    function makeSpy(spyFun){
        return jasmine.createSpyObj("uiSpy", [spyFun])
    }

    it("rock vs rock", function () {
        ui = makeSpy("tie")
        play(ROCK, ROCK, ui)
        expect(ui.tie).toHaveBeenCalled()
    });

    it("paper vs rock", function () {
        ui = makeSpy("p1Wins")
        play(PAPER, ROCK, ui)
        expect(ui.p1Wins).toHaveBeenCalled()
    });

    it("rock vs paper", function () {
        ui = makeSpy("p2Wins")

        play(ROCK, PAPER, ui)
        expect(ui.p2Wins).toHaveBeenCalled()
    });

    it("scissors vs paper", function () {
        ui = makeSpy("p1Wins")

        play(SCISSORS, PAPER, ui)
        expect(ui.p1Wins).toHaveBeenCalled()
    });
    it("paper vs scissors", function () {
        ui = makeSpy("p2Wins")

        play(PAPER, SCISSORS, ui)
        expect(ui.p2Wins).toHaveBeenCalled()
    });

    it("rock vs scissors", function () {
        ui = makeSpy("p1Wins")

        play(ROCK, SCISSORS, ui)
        expect(ui.p1Wins).toHaveBeenCalled()
    });
    it("scissors vs rock", function () {
        ui = makeSpy("p2Wins")

        play(SCISSORS, ROCK, ui)
        expect(ui.p2Wins).toHaveBeenCalled()
    });
    it("sailboat vs rock", function () {
        ui = makeSpy("p1Invalid")

        play("sailboat", ROCK, ui)
        expect(ui.p1Invalid).toHaveBeenCalled()
    });
    it("rock vs sailboat", function () {
        ui = makeSpy("p2Invalid")

        play(ROCK,"sailboat", ui)
        expect(ui.p2Invalid).toHaveBeenCalled()
    });
});





// it("Rock vs Paper", function (){
//   expect(play("rock", "paper")).toEqual("P2 Wins!");
// });
// it("Scissors vs. Paper", function () {
//    expect(play("scissors", "paper")).toEqual("P1 Wins!");
// });
// it("Paper vs. Paper", function () {
//    expect(play("paper", "paper")).toEqual("Tie")
// });
// it("Paper vs Sailboat", function () {
//     expect(play("paper", "sailboat")).toEqual("sailboat is invalid input")
// });
// it("bar vs scissors", function () {
//     expect(play("bar", "scissors")).toEqual("bar is invalid input")
// });