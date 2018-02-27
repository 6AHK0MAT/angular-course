import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    defaultAnswer = 'no';
    defaultCountry = 'ua';

    submitForm(form: NgForm) {
        console.log('Submited!', form);
    }
}
