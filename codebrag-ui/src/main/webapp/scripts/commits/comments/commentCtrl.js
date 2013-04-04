'use strict';

angular.module('codebrag.commits.comments')

    .controller('CommentCtrl',function ($scope, currentCommit, Comments) {

        $scope.commentsList = [];

        loadAllCommentsForCurrentCommit();

        function loadAllCommentsForCurrentCommit() {
            if(currentCommit.isSelected()) {
                Comments.query({id: currentCommit.id}, function(data) {
                    $scope.commentsList = data.comments;
                })
            }
        }

        $scope.addComment = {
            commitId: currentCommit.id,
            body: '',
            reset: function() {
                this.body = '';
            }
        };

        $scope.submitComment = function () {
            Comments.save($scope.addComment, function (commentResponse) {
                $scope.addComment.reset();
                $scope.commentsList.push(commentResponse.comment);
            })
        }

    })
