import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.subscribe('Patients');


Template.patients.helpers({
  patients() {
    return Patients.find();
  },
});

Template.patient.events({
  'click li'(event, instance) {
    // invoke a meteor method with the patient record that was clicked
    Meteor.call('patientViewed', instance.data);
  },
});
