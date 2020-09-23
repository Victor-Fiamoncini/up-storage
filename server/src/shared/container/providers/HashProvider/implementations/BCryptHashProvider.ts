import { compare, hash } from 'bcrypt'

import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider'

class BCryptHashProvider implements IHashProvider {
	public async encrypt(sample: string) {
		return hash(sample, 16)
	}

	public async compare(sample: string, encrypted: string) {
		return compare(sample, encrypted)
	}
}

export default BCryptHashProvider