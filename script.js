function toggleForms(formType) {
    const signInForm = document.querySelector('.signIn');
    const signUpForm = document.querySelector('.signUp');

    if (formType === 'signIn') {
      signInForm.style.display = 'block';
      signUpForm.style.display = 'none';
    } else {
      signInForm.style.display = 'none';
      signUpForm.style.display = 'block';
    }
  }

  // Show sign-in form by default
  toggleForms('signIn');





























