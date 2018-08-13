
# Neuro OpenScience Identity Hashing Javascript implementation

This is the implementation for
the identity hashing functions used in the Neuro's OpenScience
platform.

### Instructions for building:

* npm install -g browserify

* browserify open_science_identity.js --standalone osi > guid.bundle.

* let user = {gender: 'Female', first_name: 'Alizee', middle_name: 'Adelais', last_name: 'Wickenheiser', birth_day: '1990-09-18', city_of_birth: 'Edmonton'}

* let id = osi.OpenScienceIdentity(user)