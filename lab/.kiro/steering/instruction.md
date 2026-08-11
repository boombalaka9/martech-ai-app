---
inclusion: always
---

# Important Instruction

## **MANDATORY Rules**
- **CRITICAL** During development process, When thing fail, **ALWAYS** record the fail and the recover in `.kiro/steering/lessons-learned.md` . So, next time you won't hit the same error again.
- **DON'T** write markdown file that not related to development process except `.kiro/steering/lessons-learned.md`
- If you estimate the development time will exceed 20 minutes, **STOP and ASK** the user to prioritize. Propose developing only the core requirements that can be completed within 20 minutes, and list what would be deferred.
- Don't use names of **real politicians or public figures** as mock data. Use generic names instead (e.g. John, Alice, Bob).


## **CRITICAL CONSTRAINT**

> **20 MINUTES MAXIMUM** - All development must complete within this time. No exceptions.

> Make it **INTERACTIVE**. So we can demo to customers

## **Constraints**
- Prioritize working **MVP** over feature completeness
- Skip nice-to-haves, focus on core functionality
- No complex error handling - basic try/catch only
- Hardcode config values instead of environment setup
- Prefer simple, straightforward solutions over clever abstractions
- Keep related code in single files when possible - avoid unnecessary splitting

