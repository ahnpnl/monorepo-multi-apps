import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { useGraphQLClient } from './Infrastructure/ApiClient/useGraphQLClient';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'ng-app';

    private readonly apiClient = useGraphQLClient();

    constructor() {
        console.warn(this.apiClient);
    }
}
