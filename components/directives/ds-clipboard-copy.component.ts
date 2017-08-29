import { Component, Input } from '@angular/core';

import { ClipboardService } from './clipboard.service';

@Component({
    selector: 'ds-clipboard-copy',
    template: `<a class="btn btn-icon fa fa-clipboard" 
                  title="{{ 'general.copyToClipboard' | translate }}" 
                  ngxClipboard [cbContent]="copyContent"></a>`,
    host: {
        class: 'ds-clipboard-copy'
    }
})
export class DsClipboardCopyComponent {
    @Input() public copyContent: string;

    ngOnInit(): void {

    }
}