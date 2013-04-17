package com.softwaremill.codebrag.dao

import com.softwaremill.codebrag.domain.CommitReviewTask

trait CommitReviewTaskDAO {

  def save(toReview: CommitReviewTask)

  def delete(task: CommitReviewTask)

}
