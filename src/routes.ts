import { Routes } from "@angular/router";
import { GalleryComponent } from "./app/gallery/gallery.component";
import { ImageComponent } from "./app/image/image.component";

export const appRoutes: Routes = [
    { path: "gallery", component: GalleryComponent },
    { path: "image/:id", component: ImageComponent },
    { path: "", redirectTo: "/gallery", pathMatch: "full" }
];