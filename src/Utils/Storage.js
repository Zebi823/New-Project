import { v4 as uuidv4 } from "uuid";
export const products = [
    {
        id: uuidv4(),
        title: "Apple-Macbook Pro 13",
        description: "Experience power and portability like never before with the Apple MacBook Pro 13-inch, now supercharged by the next-generation Apple M2 chip. Designed for professionals, creators, and everyday users alike, this sleek and compact powerhouse offers incredible speed, stunning visuals, and all-day battery life.",
        price:" $179.99",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        rating: 4.5,
        stock: 25,
        brand: "Apple"
    },
    {
        id: uuidv4(),
        title: "Smart Fitness Watch",
        description: "Stay on top of your health and fitness goals with this all-in-one Smart Fitness Watch, designed for active lifestyles. Whether you're working out, sleeping, or managing daily tasks, this watch keeps you connected and informed—right from your wrist.",
        price: "$129.99",
        category: "Wearables", 
        image: "https://m.media-amazon.com/images/I/61sFBIcJAqL.jpg",
        rating: 4.7,
        stock: 40,
        brand: "Noise"
    },
    {
        id: uuidv4(),
        title: "Polaroide Now Generation 2 Instant Camera",
        description: "Reusable stainless steel bottle, keeps drinks cold for 24 hours.",
        price: "$19.99",
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        rating: 4.3,
        stock: 100,
        brand: "Polaroide"
    },
    {
        id: uuidv4(),
        title: "Gaming Mouse",
        description: "Elevate your gameplay with the Pro RGB Gaming Mouse, engineered for speed, accuracy, and comfort. Whether you're into fast-paced shooters or strategy games, this high-performance mouse gives you the competitive edge you need.",
        price: "$49.99",
        category: "Computers",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUQEBIQFhUVEBYVEBAWFRUQEBAQFhcXFxcXFRUYHSggGBolGxUXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0fHyUtLy0rLS0tLS0tKy0tKy0tLTUrLS0tLTArLTAtLS03LS0tLS0tLS0tLy0tLS0vLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUGBwj/xABAEAABAwEFBQUFBwEIAwEAAAABAAIDEQQSITFBBQZRYYETIjJxkQdCobHwFCNScoLB0WIzQ1OSsrPC8WNzohb/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QANhEBAAIBAgMFBwMEAAcAAAAAAAECAwQREiExEzJBUYEFYXGRobHBFCLRQlLh8CMkQ3KCwvH/2gAMAwEAAhEDEQA/APcUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQlBrYd4rI/w2qz45DtGAnoSrtIzorSx3hew+TgfkoLqAgICAgICAgICAgICAgICAgICAgICAg0+2t4YrNVvjk/ADl+Y6fNWK7jQze0KOCB0s8MznM9yEB5eOIDnCgGuOXorNR5xtf24WuV1LJBBCzQvrPKRofda3yofNYrEbrh392o+K9LIWMc0gkRRNF0jiW93DiQtFNXhtfgi0bui+kzUrF7VmIcvBtAMoHuc5ulbjH04i8W68gD8V0XtMV3hopEb/ube02a6A4XXNcKseMWuC1abVRmifCY5THlLZmw9nPXePCfNjh9F1NColPFBn7M2zNZ3X4ZXsPAGrT+ZpwcPMKcpHqe6G/EdrpDNdjn0H93L+QnI/0npVYTXZXXrEEBAQEBAQEBAQEBAQEBAQEGHtLakNmbemka3gM3O/K0YlWI3HD7b32fJVkFY2fj/vXDp4emPNZxRN3L/aKrMO1RHI7x7shxM9lAD61dFhdeeLRkHcsj88LU3ZVttO7B3c3lc2Utnq5jzSZjuBzIGhHDovG1ugrbHvj5WjpL0cWvvN57Sd4nqlvPss2WZwa4hjqOZIKPkmDsW4kHAZdFu9m6v9RiiZ5T0n4w5tTj4L8ujabuPfPDJZw4iRgMsBe2jTd8cZAzDhjhkW1XNrN9NnrnjpP7bevSfSfpLPHbtMc0nw5x+WNBab9WkFr2mj4zm08QdWnQjNe3W28buSVyqyRS8gqJOfkdQUHqe4G/XbFtktZJkyimoT2gAJo86GgPeOeuOeu+1Y3lYjd6IpuCAgICAgICAgICAgICAgw9s2wwQSyilWRuc0HIuA7oPWisdR8/7Q3olllv2k38KOlDQHilaOo0UcNCBoBTGt7OOSMgT5EEEEAhwNQ4HIg6hZ7iTZ0F9kyIuX0HPbx7CEtZohSUYkDKSn/L5rC9d4WJWLZvBFJYoo5Ki0QuLGgtJrCcQa0pVpFKFeJp9Lkway9oj9lufwt/l03yRbHET1hqtibwdhMyRl8lrg4tccHAHEUFaA4jqu/V6eNRitjnxjZqpeazvC/JJ2hLmVa9pcYtbrCSREcqs0xW/DSaUiszvMePmxmd5ZtmtIkYHjUYjVrx4mnmCtu7FMuVEC5BOG0Fjg5pIINQdQVhkpXJWa2jeJWJmJ3h7T7P97BaoxHIR2jQAeegP15cF5eLJbTZOxyTvWe7P4n3x4T4x74nfbba0cUertF6TUICAgICAgICAgICAgIPD/ahvrN9sfYJaMslLpu5zVFCZHZgA+6MsCa6ZRy6jh57E6I0b3m5tGHfbyOjh6HyoRlsjMsb7jL7TWEkkn/BdXF1NG18Q0OPFWBml1DQqi4yVBkslVE76I5vefYvaAyxjvDF4HvDiBx4/wA4HC1fFWi2BbGNvWacARyO8eFY5KAA14ZLGJVkyB9lkxNLp7r8LrhlUaEHEU8wr0GR9qa4m0QA3agTx0PDxM4lvxHqnvGaHggEEEEVBGRByIWSBUEHFBl7I2o+zStlYcQceBGoPJc+p09c+OaW/wDnlMe+PBYnZ9Abr7cZbIWvacaZa868x+4Oq5dHmtzxZe9X6x4T6/Sd4Jlul3AgICAgICAgICAgIIkoPCvbDsq5aw57axzC+x39QPfHmCfR4Wcc4HITSPszWxXgY3UdZpTiC0Zxurk5tfTyV6IhsnajmzVYBIC0unhYLxc1tKvbjQPA094CmdFNxvbTYwwMdCb8EorZ3NBeWOIJ7KgFbtAbvChbhQVl8lcdeK07R5rtuxmSLKtotG8IvMkWQvNkQXA9ByO9GyKHtYwKHNvA1+RJ6HDXDC0K0uy9mm0ydm1wvBhc1rie9T3W81jEbjbbItXZODSDdBo5uRHHqso5DOmh+zvDW07GQ1iIyY843eTXZjgahXoi6Sgg5BbJQdX7P94nWaXs7wDXZE+Fr8gTyxoeR5BcGrxTvGWkfur9Y8Y/j3teTeI3h6psDfVk0v2W0M7GatGit6OR3BrtHcjnoSunHaL1i1eks6Xi0bw6xZMhAQEBAQEBAQEFCgtvKDl9/wDYH2+yPiaB2rfvLOeErQcK8HAlvXkrA+dJLc9rHwuPdOD43DI+RxBw+Cy3GJZrUYXX4u66lLwABoeZUGx3e2w+GVsgJDmvLmu/C4mruh181p1GCmfHOO8bxKxO07w9C2zY2WyI2+zABwxtcI912srRwOvroa+HoMmTQZf0uad6z3J/C3tE83MNcvpYlguB6oqJq4N9dB/JQSLAQWkVDhR1cbwOGKDjNsWJ1mlEkZIobzH64HM8wcDxqDqaa5jZVZtuh7i99mic9xq5197QT+VpCbjYbMtTrQHRSMa2K6RdqS4ONPCTjhn5qxzFyB7gTHIavZmcg9p8Lx568wURdJVECggHEGo0UHWz2j7TAyb32ANkOuHgd50FOgXNhr2V5p4Tzj8vNpl7HUdjbpbnX8x+XqHs43pNsiMMxrPEBU6yxZB/mDgeh1XRMbPTdksQQEBAQEBAQEFCgsyFBiTOQeG+1nd3sJ/tkQ+7ndSUAYR2jOvk8Cv5geIVgeeSKiDCQC4CtM+NKoOv3N3jdZpGkGoOFNHNPun9ly6vSU1OPht6MbRvDod5NksAFqs39i/NozhefdoMhXLhlwrzaHUXrPYZu9H1aMeX93Bbq50Y55cP5/j5r1nQuNcguB6osW6zNmbddxqDqD/1UeRKkxuNZ/8AnoR+P/MpwicdhbH4C4da/NNhC0Nc5zXVFW1xpi5hzacevIhBWqCl5BEqDbbtWsMk7N57jxddyB16Gh6KTXd5vtTBa+Ljp3q84+Mfz0bbZm0X7OtjJsfu30kaPfiODxzqMRzAKymHVpNRXPirkr4w+gYpA9oc0gtcAWkZFpFQQtbpTQEBAQEBAQEESgsPQYloQcxvLYmWiJ8Mgq17aHiDmCOBBAI5hB8/bWsLoJHRSeJppXIOGjhyIxWQxLO6mPrrhzGqCZ+7N4eBxx1uO+vrNB3e6G8AbWGbvMeKOBxBHEc1yarTdpHFXlaOjh1mG1q8VO9HQ23s3sX1bix2LHcR/K26fLN67W6w1+z9fXU1mOlo5TDWVXS9FIOQVqgEoLMiDFkCgtFQRqgiUBjiCCDl1QmN42dLtV3awxWkZkdnL+do7p6t+S3Wj9sWeHoJ/T6nJpp6d6vwnr8p+71r2UbX+0WIRE9+zu7I8ezzjPldN39BXPL3XZqAgICAgICAgi5BZcgxZhVBptoxVCDyv2h7E7RvbMHfYMeLo8yOmfqrA83gColDLiWnI/FBOyWi4+4Dke6crpzulIHoe7u0W2mM2abP3DwdpT65LGcfPijq+Y9q6bJpcn6zB4d6POGp2lY3QvLHaZHQjitj29Fq6arFGSjFqq61Q5ALkECUFiRQWXqC0SgpVAqg3+70naRy2Y++ysf/ALGd5vriOq6cH7t6ef3eL7Vr2V8epj+mef8A2zyn8T6N/wCyLbHYW4RONGztMZ4do2roz/qb+tc1oezWd43e7LBkICAgICAgIIOQWygsvagwbXDVByu2rDUFB4lt2wfZ7RIylGmjmcKONKdDUeiygaZ7aivX1yQXbJRwc15zdU/04ABw6jHodEGwsFpdG66TR7dfxDirEsbVi0bS74ObtCz3h/bRtxGrm/Xx8101r2leXWHyUTb2Tq+H/pXn5T/v0+DlXGmC0PrYmJjeC8oql76oUFC5BaeUFp31qgsuUEKoCDK2daTHI140IWzFfhtEw06jFGXFak+MM62SGC09rEaEPbLEeBqHt9D8lu1eOK5OXSecerm9m5JtgituteU+nJ9KbJt7bTDHOzwyRteOVRUg8wcOi4noMtAQEBAQEBBByC2UEHBBYkag1Nvgqg8P9pjw60XWf3bQ1x4yHGnS83qCrA44HDy/YOA+SosuJaajQ+vFQZl++0FviaKtP9IzafL5eQVG52Btl0L2zM0NHt+YK24sk0tvDi1+jpq8M47N9vHZ2upaYfBJiR+F2o+ua6dTijaMlekvM9j6m9d9Lm71frDRXlxvfUvIKFyCJcgtuKgtkoIEoI1UFQqNjbH34mP1b3T5Zj916GWO001b+XL8x+Xn4Y7PU2r4W5+vSfw6ncneuaxAOYbzA6ksBPdcNHN/C6mFeWNVwbbw9B7dsLbMNtiE0Dqg4OacHxu1a4aFYTGytgoCAgICAgg5BAoIFBbcEGj3nt4stnknNDdb3AfekODB6kdKpA8OtkHaNNTVxJcXal5qSTzJJW3ZHJzxXSRlp5DFo+ZKwVZkxx8z6kH90EIpCw9fioM6yULyWBwaRjWgbyA4qjpNhW4C9ZpPA/w/0u0+vJeloctZ3xX6T93ie09LbeNTi71frDDtkRjeWHQ+oXLqMNsN5rL0tLnrnxxeFm+tLoUvKCl5BElBAlBAlBAlQAUGbZ31Y5nKo8xj/K9LRTx0yYvON4+Mc/tu49TXa1MnlP35J7ItFHXfxZfmGX7jqvP6S7HUbr7wu2daWzNP3LyG2hmhjJxdTi2tR1GpSYH0ItaiAgICAgiUECEECEFtwQebe2G1ENs0VcHOlkI4mMMaP90rKo8/hdULNGn25Zcbw1+B49BX4qTA0Thy0/ao+Ab6rFVuVvzKgyLBLQ0VgbGTiFlE7TuxmN42bGWXt4g/32YO4lvH65r2r1/WabjjvV6++Hj4o/Sajg/pt090tZeXiPZVvIFUFCUFCUECVBAlFUqgv2aShXXosvZZ62nzas1OOkwtNdddhocFNZh7HPanlK454qxLoGkSx14+IcDqtDN9Fbs2ky2OzyHN1mjLvzFgr8arXKtmoCAgICAgiQgg9BaKDgfa9swyWRtoYKus8naOGphcLsg6Cjv0KwPK4H6jLTmFsRO1Rh7SDqEkctao7pNePrkT8breiwVjEfI/Kn/AoKAUOHGg80G2idUKorZp+zfXQ4OHJd2g1U6fNE+HSfg5tXgjNTbx8C2suuwyOI8ls9p6TsMu9e7bnCaTLN6bW6x1WA9eY6lbyBeQUJQRJRUSgpVBJhVidpFbWKOB4gHrl+y9L2l++aZf7qx845T9kiu0Njse03TQ+E4HlzXnRI+jdwn1sFnppHT/ACucP2WE9VdAoCAgICDAO0QS5rR4XFprxCuwp9ocdf2TYYrtpwiVsBmiEzq3IS9vauoC40ZWvhB0yQZ9a4qCzaYQ9pY4VBBBGhBQfPu1tlGwWqSyOrdBv2d34oSagV4txHTms6yiDlmNJtaD3hy9dK8hWvRYSNPT0w9Mh8A49VFBj6fEhv8AKDOsxw+HpgrCJTBAa+827qMl9Ho9tdpLYJ79edf4cdsc48vHHSerHqvnbRMTtLtVqsQqgnDG55DWAknQfEk5Acysq1m07VjdlSlrzw1jeV9zYmeJzpHcGEMjH6yCXdABzWzbHXrPFPu5R8/H0j1bZjFTvTxT7uUfOd9/SPVm2CwOnp2dkF0++Xytb/mLqHoCt+LDOXu4uXnvP33/AA6sGmtmn9mDl572j67/AGhrbVGBdc0OAe0m643i1wc5pbWgrkDlqua9YjaY8f5mHHkrERFqxMRMdJ8JiZiY8FgFa2petYrE13BxB6iv7Felknj0dZ/tmY+fP+W3h3x7lievOhqfR3sxlrs+AcA//cesZ6jrlAQEBBByDmLdL2FqDHEgTguYdLwAvDz16LLwFNj2aeMuM83aVGVBgQcxda0AUOVOGOGOukXiZ4p38uXRlM12jaFy0bHspmbbJY4+0jxZM40EZpSoqaA0GeayiIhN2Ja9+rBCaG0NdjiYwZWt4lz2i6BrnxV2lHS1UHEe1Hdk2uATQj76HvxkZuHvM6geoCsSPJrLaRIwOyPvDKjvLRbEWLWKggqSOetEdCR6dcMPILFUYzj9ZEk/JoQZcWQ8h8qqouFBYDrrgV06PU20+auSvgTG67bIqUcMnYrv9r6esXjNj7t+f8suHaGPVeMggy7GSWSxjxOjDm8+zN4t5gtvGnFgW7HzrasdZj7c9vlv8m/FvNb0jrMbx/489vlv8ob2fbcET4+ygg7J7A6YhgL8SQ5oAoARTI1XfbV4qWrwUjhmN55c/fHo9S+uwYrV7PFXhmIm3Ln749Fd49qPiniMZe1jWAhjTdjeGvcCLowpdaM8qhNZqL0y1mm8REdPCec/hfaGqviz0mkzFYjpHSdpmOnw+7QWx5dHG46yTH1LD86rgyTvSs++34eXlnfHWZ8Zt94Ya0udlxi9FIOADh0ND8CvQ088WDJT4T8p/wAurDHFjvHr/vzY1icvPhyvob2YS0scLf6T8XOP7qT1HdtKgqgICCLkHP75ODLM+elTADI3Q4Z0OmasDynaO/lsfVrHRxN/oaC6nN773yastkc3bbXJMb00kkh0L3F/peJA6EKjGleG4uIbwvGnzx9KoPavZRtn7ZYQKkmzyGC+a95rWtczE4mjXBtT+GuqwlXYPjqKFQeG+0jdw2G0G1RN+5md96BkyQ6+R+fmsokctMaio6LJGqtQqorEDafXBtFBkxn68sERcVFmUKKy7D94wxHMYs/he7orxqdPbTW6xzq6sNe0rNPHwYDhTBeJas1naXNMbTsLFEopSxwe00LSC08CMQsq2msxMdYZVtNbRavWF62QinaRjuPNKf4T8zGfmDqOYKzyVjvV6T9J8v493q2ZaRtx07s/SfL+POPVtNu2ky2aCY/ic14AoL9A3p/ZE/qXVqb9pgpefX49Px9Xdrcs5dNjyT5zE/Hbb/1+rV7Q7pbF/hxhruUjiXvHQuu/pXLl5TFPKPr1n77ejizxwzGP+2OfxnnPy329GItTQztl4lzPxMcP/k/uu3RT++a+cTH0d2gjiyTTziY+jBshxXHPVxWjm+gPZ+67BE3/AMbfiKrCUehQuqEFxAQEESg1O8+znWmyz2djrrpIXMa45BxHdryrRB8x2rabovu3M77KtdeJqxwcQWkDVpBGdMFnuNdLtSRxpeIrk1ndJ5YYlTcZ1g3XttoxZZ5AD78g7IefexPQFTce7ex7YUlgs0kUxaXSTmWjalrQWMbSpAr4OGqg71zUGs27sllqhfDI0FrmkEIPnfb+yX7PmdZ5KluJjfTxMrn8cVnEo0FoeDkirIUF1iC5VEQeiowyljg4aFbsGacWSLx4M8d5paLQzdrQiokb4XivXVd3tLHHFGanS3P1dmtxRExkr0s1q8twCC9Z7SYySKEEUcxwvMe3g4a/MaUWdLzWeX+JZ48k0nl49YnpPx/34MxluY1lG9p3X9oyB1HxtmpdD7+ZaBjdIzAxOK3RlpFeW/XeInnG/Tffy923q6a56Vry35TvFZ5xxdN9+u0eUx125zzawnU1JOJJxJPErncaNVBl7JkpKz8w+a6NLbhy1n3uz2fbh1NPjCy2I9sYxn2l0edaBa8scN5hq1NODLavlMvoDdtl1rQNAB6LS0O4sb6hBloCAgoUFC1BwO3/AGW2S1Wp9reJCZCC+K+WRh4GLhdocczjnVBstlbl2ezikMMTOJa0AnzOZQbmLZDRoEGZBZgzJBkUQRcEHNb37rx26O67BwxY8eJp/cckHhO8m5Nqszz3Q5vECleau4537M4YEUOrTg7pXPoqKtFEE0RByKg4INns09rE6E5jvM/cfXFepprdtgthnrHOHs6OP1GC2Gesc4atwovMmNnjzG07IlRFEFCUESUFCUFyzPo4HgQsqTtaJbcFuHJWfe3OzbLf2kGUqO1L3cgO9X1oOq26rllt8XZ7Wrw6vJHv+73LZMdAFzPOdTYXYINi1BVAQEBAQKICAgIKFBbeEGBbbE14oQCg5Dbm5MEwNWAHiAg843g3Emgq6MX2jT3gORV3HISRFpIIOGYIoR5hUWiggQguWGfs5Gv4HHmNVuwZZx5Is6tFnnBmrdk7as9194eFwvDqtusxxXJvHSebr9r6aMWbir3bc49WuK5HlIlBElBElBQlAY/EeaterPH3oenbmbHrNJaiMX0azlGKVPUj0AW3U2i2SZh3e1clcmqvas7w9QsMVAFzvObmyoNlGUE0BAQEBAQEBAQEEHBBac1BbcxBh2ixh2iDj95NyYrQCbt12jhgaoPKtv7qTWUkuaXN/G0f6h9dVdxzz20z9dFRacEG2J7WzA6xmn6fr5Lvn/i6ffxq+jt/zXsyLf1Y5+k/79GnK4HziBKCBKCDnIKQRvldcjaXHgNPM6KbjuN1txS5wktGJrUM90efFQes7L2aGAABBvrPDRBnQtQZ0aC4gICAgICAgICAgoUESEEC1BEsQWXw1QYFs2a14IIBQcBvH7OmSVfD3HcB4T5hB5rtndeezk3mHzGLT/Cu4xdiuoXxOwvMOBwxH/ZXdo7RPFSfGHv+w8kT2mG08rVn5tRJIKrjl4VusrYJOABPIYrFizbJsS0TeCN3mcB/Kbjqdkezl76GYn8owHrmoPQNibnxwgBrAOiDqbJsoN0QbSGyUQZLIUF5saC80IJIKoCAgICAgICAgIKUQKIKXUFC1BExoLboAUGFatkskFHNBQcvtP2e2eWpuAdMEGoHstgBrcHog2Vj3DhZkweiDdWbdxjMmj0QbKLZgGiDKZZANEF5sKCYjQVuoK0QVAQVQEBAQEBAQEBAQEBAQEBAQEFKIFEFLqBcQVuoFEFaICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/2Q==",
        rating: 4.6,
        stock: 60,
        brand: "GameTech"
    },
    {
        id: uuidv4(),
        title: "Ant Esports WK100 2in1 Wireless/Bluetooth Keyboard",
        description: "Work and play without limits with the Ant Esports WK100, a sleek 2-in-1 keyboard designed for ultimate flexibility and productivity. Featuring both 2.4GHz wireless and Bluetooth connectivity, this slim, lightweight keyboard switches effortlessly between devices—whether you're using a PC, laptop, tablet, or smartphone.",
        price: "$14.99",
        category: "Apparel",
        image: "https://m.media-amazon.com/images/I/61WKVeq-RZL.jpg",
        rating: 4.2,
        stock: 200,
        brand: "UrbanWear"
    },
    {
        id: uuidv4(),
        title: "boAt WCD QC3.0 Wall Charger",
        description: "Charge smarter and faster with the boAt WCD QC3.0 Wall Charger, designed to keep your devices powered up without wasting time. With Quick Charge 3.0 support and intelligent charging technology, this compact charger is perfect for daily use—at home, in the office, or on the go.",
        price: "$24.99",
        category: "Accessories",
        image: "https://m.media-amazon.com/images/I/51eFYHPB4YL.jpg",
        rating: 4.4,
        stock: 80,
        brand: "boat"
    },
    {
        id: uuidv4(),
        title: "CMF Buds 2a True Wireless earphones",
        description: "A minimalist glossy white finish defines the AirPods' iconic aesthetic—clean, modern, and instantly recognizable.Crafted from high-quality polycarbonate with a smooth, non-porous surface. ",
        price: "$9.99",
        category: "Home & Kitchen",
        image: "https://m.media-amazon.com/images/I/711JcqhqOaL.jpg",
        rating: 4.1,
        stock: 150,
        brand: "CMF"
    },
    {
        id: uuidv4(),
        title: "HP All-in-One Desktop PC 54.5 cm",
        description: "Powerful performance meets minimalist design with the HP All-in-One Desktop PC. Featuring a vibrant 54.5 cm (21.5-inch) Full HD display, this all-in-one system is perfect for work, study, entertainment, and everyday multitasking—without the bulk of a traditional desktop.",
        price: "$29.99",
        category: "Sports",
        image: "https://m.media-amazon.com/images/I/61IcdoVmZuL.jpg",
        rating: 4.8,
        stock: 70,
        brand: "ZenFlex"
    },
   
];