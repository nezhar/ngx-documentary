import { Route } from '@angular/router';

export interface DocumentaryLink {
    name: string;
    href: string;
}

export interface DocumentaryRouteData {
    name: string;
    fragments?: DocumentaryLink[];
}

export type DocumentaryRoute = Route & { data: DocumentaryRouteData };

export interface DocumentaryConfig {
    title: string;
    links: DocumentaryLink[];
    routes: DocumentaryRoute[];
    currentVersion?: string;
    versions?: DocumentaryLink[];
}
