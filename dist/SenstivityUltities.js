let checkedAllergy = {};

function handleCheckboxClick(event) {
  console.log(event.target.checked);
  const checkbox = event.target;
  const allergyName = checkbox.value;

  if (checkbox.checked) {
    checkedAllergy = allergies.find((a) => a.name === allergyName);
    if (checkedAllergy)
      checkedAllergy.content = checkedAllergy.content.map((ingredient) =>
        ingredient.toLowerCase()
      );
  } else {
    checkedAllergy = {};
  }
}
