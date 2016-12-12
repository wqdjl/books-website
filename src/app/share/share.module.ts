import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, JsonpModule],
    exports: [CommonModule, FormsModule, HttpModule, JsonpModule]
})
export class ShareModule { };