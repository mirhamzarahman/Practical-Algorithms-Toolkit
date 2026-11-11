/**
 * Combines person records with their corresponding
 * address records.
 *
 * Every person is preserved, even without an address.
 *
 * @param {Array} people
 * @param {Array} addresses
 * @returns {Array}
 */
export function enrichPeopleWithAddresses(people, addresses) {
    const addressMap = new Map();

    // Index addresses by person ID.
    for (const address of addresses) {
        addressMap.set(address.personId, address);
    }

    // Preserve every person and attach matching details.
    return people.map(person => {
        const address = addressMap.get(person.personId);

        return {
            firstName: person.firstName,
            lastName: person.lastName,
            city: address?.city ?? null,
            state: address?.state ?? null
        };
    });
}
