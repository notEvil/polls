/* jshint esversion: 6 */
/**
 * @copyright Copyright (c) 2021 Rene Gieling <github@dartcafe.de>
 *
 * @author Rene Gieling <github@dartcafe.de>
 *
 * @license  AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

const uniqueArrayOfObjects = function(array) {
	return [...new Set(array.map((obj) => JSON.stringify(obj)))].map((string) => JSON.parse(string))
}

const uniqueOptions = function(options) {
	return options.filter((option, index, array) => array.findIndex((compare) => (compare.text === option.text)) === index)
}

const uniqueParticipants = function(votes) {
	const participants = votes.map((vote) => ({
		userId: vote.user.userId,
		displayName: vote.user.displayName,
		isNoUser: vote.user.isNoUser,
		user: vote.user,
		pollId: vote.pollId,
	}))
	return uniqueArrayOfObjects(participants)
}
export { uniqueArrayOfObjects, uniqueOptions, uniqueParticipants }
