import Controller from '@ember/controller';

export default Controller.extend({
  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  mLength: Ember.computed.alias('message.length'),
  messageValid: Ember.computed.gte('mLength', 5),
  isValid: Ember.computed.and('emailValid', 'messageValid'),
  isDisabled: Ember.computed.not('isValid'),

  emailAddress: '',
  message: '',

  actions: {
    saveContact() {
      alert(`Email Address: ${this.get('emailAddress')} Message: ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We got your message and we'll get in touch soon.`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
