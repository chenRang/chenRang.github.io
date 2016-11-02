// $.validator.addMethod('isMobile',function(value,element){

// })
$.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    //var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+[0-9]{8})$/;
    var mobile = /^((1[3,5,7,8]{1}[0-9]{1})+[0-9]{8})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

$.validator.addMethod("qq", function(value, element) {
    var qq = /^[1-9]\d{4,9}$/;
    return this.optional(element) || (qq.test(value));
}, "qq号码格式错误");

$.validator.setDefaults({
  errorElement: "em",
  errorPlacement: function(error, element) {
      // Add the `help-block` class to the error element
      error.addClass("help-block");

      // Add `has-feedback` class to the parent div.form-group
      // in order to add icons to inputs
      element.parents(".col-sm-7").addClass("has-feedback");

      if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("label"));
      } else {
          error.insertAfter(element);
      }

      // Add the span element, if doesn't exists, and apply the icon classes to it.
      if (!element.next("span")[0]) {
          $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>").insertAfter(element);
      }
  },
  success: function(label, element) {
      // Add the span element, if doesn't exists, and apply the icon classes to it.
      if (!$(element).next("span")[0]) {
          $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
      }
  },
  highlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-7").addClass("has-error").removeClass("has-success");
      $(element).next("span").addClass("glyphicon-remove").removeClass("glyphicon-ok");
  },
  unhighlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-7").addClass("has-success").removeClass("has-error");
      $(element).next("span").addClass("glyphicon-ok").removeClass("glyphicon-remove");
  }
});

$(function() {
    $('#dataForm').validate({
        rules: {
            title: {
                required: true,
                minlength: 3
            },
            description: {
                required: true,
                minlength:5
            }
        }
    });
})
