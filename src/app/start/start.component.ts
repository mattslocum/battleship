import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
    public playerName : string = "";
    public errorMsg : string;
    public gameType : string = "singleGrid";

    constructor() { }

    ngOnInit() {
    }

    createGame() {
        if (this.playerName) {
    //         $scope.oGame = gameService.newGame({
    //             'game': $scope.strGame,
    //             'player': $scope.strPlayer,
    //             'type': $scope.strGameType
    //         });
    // //            $scope.oGame.players.push($scope.strPlayer);
    //         $scope.oGame.state = 'join';
    //         $scope.bJoined = true;
    //         if (!$scope.$$phase) {
    //             $scope.$digest();
    //         }
        } else {
            this.errorMsg = "Please enter a name";
        }
    }

}
