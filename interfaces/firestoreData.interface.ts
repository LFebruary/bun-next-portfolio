interface FirestoreData {
    version: number;
}

class FirestoreDataMigration<TPrevious extends FirestoreData, TNext extends FirestoreData> {
    previousVersion: number;
    nextVersion: number;
    migration: (previousType: TPrevious) => TNext;

    constructor(
        migration: (previousType: TPrevious) => TNext,
        previousVersion: number,
        nextVersion: number
    ) {
        this.migration = migration;
        this.previousVersion = previousVersion;
        this.nextVersion = nextVersion;

        const previousInstance = migration({ version: previousVersion } as TPrevious);
        const nextInstance = migration({ version: previousVersion } as TPrevious);

        if (previousInstance.version !== previousVersion) {
            throw new Error(
                `TPrevious version (${previousInstance.version}) does not match the specified previousVersion (${previousVersion})`
            );
        }

        if (nextInstance.version !== nextVersion) {
            throw new Error(
                `TNext version (${nextInstance.version}) does not match the specified nextVersion (${nextVersion})`
            );
        }
    }
}
