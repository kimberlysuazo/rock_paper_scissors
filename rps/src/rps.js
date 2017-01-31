

function play(p1, p2, ui){
    new playUseCase(p1, p2, ui).execute()

}

function playUseCase(p1, p2, ui) {
    const validInputs = ["rock", "paper", "scissors"]

    function invalid(playerThrow){
        return !validInputs.includes(playerThrow);
    }

    function tie() {
        return p1 === p2;
    }

    function p1BeatsP2() {
        return (p1 === "paper" && p2 === "rock" ||
        p1 === "scissors" && p2 === "paper" ||
        p1 === "rock" && p2 === "scissors")
    }



    this.execute = function() {
        checkTie() &&
        checkInvalid() &&
        checkWinner()

        function checkTie() {
            if (tie()) {
                ui.tie()
                return false
            }
            return true
        }

        function checkInvalid() {
            if (invalid(p1)) {
                ui.p1Invalid()
            }
            else if (invalid(p2)){
                ui.p2Invalid()
            } else {
                return true
            }
        }

        function checkWinner() {
            if (p1BeatsP2()) {
                ui.p1Wins()
            }
            else {
                ui.p2Wins()
            }
        }
    }
}

module.exports = {
    play
}