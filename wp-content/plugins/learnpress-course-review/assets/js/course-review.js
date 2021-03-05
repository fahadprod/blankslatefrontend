/**
 * LearnPress Course Review addon
 *
 * WARNING: This script may not work correct with LP version before 1.0
 *
 * @version 1.0
 */
;(function ($) {
    if (typeof LP == 'undefined' && typeof LearnPress != 'undefined') {
        window.LP = LearnPress;
    }

    function CourseReview() {
        var $reviewForm = $('#course-review').appendTo(document.body),
            $reviewBtn = $(".write-a-review"),
            $stars = $('.review-fields ul > li span', $reviewForm).each(function (i) {
                $(this).hover(function () {
                    if (submitting) {
                        return;
                    }
                    $stars.map(function (j) {
                        $(this).toggleClass('hover', j <= i);
                    })
                }, function () {
                    if (submitting) {
                        return;
                    }
                    var selected = $reviewForm.find('input[name="rating"]').val();
                    if (selected) {
                        $stars.map(function (j) {
                            $(this).toggleClass('hover', j < selected);
                        });
                    } else {
                        $stars.removeClass('hover')
                    }
                }).click(function (e) {
                    if (submitting) {
                        return;
                    }
                    e.preventDefault();
                    $reviewForm.find('input[name="rating"]').val($stars.index($(this)) + 1);
                })
            }),
            that = this,
            submitting = false,
            showForm = null,
            closeForm = null,
            addReview = null;

        showForm = this.showForm = function () {
            var _completed = function () {
                $('input[type="text"], textarea', this).val('');
                $stars.removeClass('hover');
            }
            $reviewForm.fadeIn(_completed);
        }

        closeForm = this.closeForm = function () {
            var _completed = function () {
                $('button, input[type="text"], textarea', $reviewForm).prop('disabled', false);
                $reviewForm.removeClass('submitting').data('selected', '');
                $stars.removeClass('hover')
            }
            $reviewForm.find('input[name="rating"]').val('')
            $(document).focus();
            $reviewForm.fadeOut(_completed);
        }

        addReview = this.addReview = function () {
            var $reviewTitle = $('input[name="review_title"]', $reviewForm);
            var $reviewContent = $('textarea[name="review_content"]', $reviewForm);
            var rating = $reviewForm.find('input[name="rating"]').val();
            var course_id = $(this).attr('data-id');

            if (0 == $reviewTitle.val().length) {
                alert(learn_press_course_review.localize.empty_title)
                $reviewTitle.focus();
                return;
            }

            if (0 == $reviewContent.val().length) {
                alert(learn_press_course_review.localize.empty_content)
                $reviewContent.focus();
                return;
            }

            if (0 == rating) {
                alert(learn_press_course_review.localize.empty_rating)
                return;
            }
            $reviewForm.addClass('submitting');
            $.ajax({
                url: window.location.href,
                data: $('form', $reviewForm).serialize(),
                dataType: 'text',
                success: function (response) {
                    submitting = false;
                    response = LP.parseJSON(response);
                    if (response.result == 'success') {
                        closeForm();
                        LP.reload();
                    } else {
                        $('button, input[type="text"], textarea', $reviewForm).prop('disabled', false);
                        $reviewForm.removeClass('submitting').addClass('error');
                        $reviewForm.find('message').html(response.message);
                    }
                },
                error: function (response) {
                    response = LP.parseJSON(response);
                    submitting = false;
                    $('button, input[type="text"], textarea', $reviewForm).prop('disabled', false);
                    $reviewForm.removeClass('submitting').addClass('error');
                    $reviewForm.find('message').html(response.message);
                }
            });
            $('button, input[type="text"], textarea', $reviewForm).prop('disabled', true);

        }

        $reviewBtn.click(function (e) {
            e.preventDefault();
            that.showForm();
        });

        $reviewForm
            .on('click', '.submit-review', addReview)
            .on('click', '.close', function (e) {
                e.preventDefault();
                closeForm();
            })
    }

    $(document).ready(function () {
        new CourseReview();
    });

})
(jQuery);
jQuery(document).ready(function ($) {

    $(document).on('click', '.course-review-load-more', function () {
        var $button = $(this);
        if (!$button.is(':visible')) return;
        $button.hide();
        var paged = parseInt($(this).attr('data-paged')) + 1;
        $('#course-reviews .loading').show();
        $.ajax({
            type: "POST",
            dataType: 'html',
            url: window.location.href,
            data: {
                'lp-ajax': 'learnpress_load_course_review',
                'paged': paged
            },
            success: function (response) {
                //response = LP.parseJSON(response);
                var $content = $(response),
                    $loading = $('#course-reviews .loading').hide();
                if ($content.find('.course-reviews-list').length) {
                    $content.find('.course-reviews-list > li:not(.loading)').insertBefore($loading);
                }
                if ($content.find('.course-review-load-more').length) {
                    $button.show().attr('data-paged', paged);
                } else {
                    $button.remove();
                }
            }
        });
    });
})