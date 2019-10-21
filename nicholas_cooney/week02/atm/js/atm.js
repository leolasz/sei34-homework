const $check = $('#checking-balance');
const $savings = $('#savings-balance');

/////// CHECKING ACCOUNT ///////////

//DEPOSIT
$('#checking-deposit').click(function() {
  deposit($check, '#checking-amount');
});

//WITHDRAW
$('#checking-withdraw').click(function() {
  withdrawOverDraft($check, '#checking-amount', $savings);
});
if ($check.html() === "$0") {
  $check.removeClass('balance').addClass('zero');
}

/////// SAVINGS ACCOUNT ///////////

//DEPOSIT
$('#savings-deposit').click(function() {
  deposit($savings, '#savings-amount');
});

//WITHDRAW
$('#savings-withdraw').click(function() {
  withdrawOverDraft($savings,'#savings-amount', $check);
});
if ($savings.html() === "$0") {
  $savings.removeClass('balance').addClass('zero');
}

// Deposit function
const deposit = function(acc, id) {
  const current = acc.html().slice(1);
  const deposit = $(id).val();
  const total = Number(current) + Number(deposit);

  acc.text('$' + total);
  if (acc.html() !== "$0") {
    acc.removeClass('zero').addClass('balance');
  }
};

//withdraw and overdraft function
const withdrawOverDraft = function(acc1, id, acc2) { //acc1 is current account. acc2 is overdraft account. id is the account amount.
  const current = Number(acc1.html().slice(1));
  const withdraw = Number($(id).val());
  const total = current - withdraw;

  if (total >= 0) {
    acc1.text('$' + total);
  } if (acc1.html() === "$0") {
    acc1.removeClass('balance').addClass('zero');
  } if (withdraw >= current) {
    const draft = withdraw - current;
    const otherAcc = Number(acc2.html().slice(1));

    acc1.text("$0");
    acc1.removeClass('balance').addClass('zero');
    if (otherAcc >= draft){
      acc2.text('$' + (otherAcc - draft));
      if (acc2.html() === "$0") {
        acc2.removeClass('balance').addClass('zero');
      }
    } else {
      console.log(false);
    }
  }
};
