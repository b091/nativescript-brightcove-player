import {Common} from './brightcove-player.common';
import * as application from 'application';

export class BrightcovePlayer extends Common {

    public get() {
        const PackageManager = android.content.pm.PackageManager;
        const pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(),
            PackageManager.GET_META_DATA);
        return pkg.versionName;
    }
}
